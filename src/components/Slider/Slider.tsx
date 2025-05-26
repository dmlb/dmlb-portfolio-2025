import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Slider.module.css';
import { useWindowSize, useThrottle } from "@uidotdev/usehooks";

type Props = {
    type: 'list' | 'slide',
    slides: React.ReactNode[],
    showPrevNextButtons: boolean,
    showPageNumber: boolean,
    paginationNavigationType: 'none' | 'thumbnail' | 'dots',
}

const PaginationButtonChild = ({ type, slideNumber }: { type: 'thumbnail' | 'dots', slideNumber: number }) => {
    return type == 'thumbnail' ? (
        <img alt={`go to slide number ${slideNumber}`} src="" height="129" loading="lazy" width="172" />)
        : (
            <span className="sr-only">go to slide number {slideNumber}</span>
        );
}


export const PaginationNavigation = ({ currentPage, totalPages, type, onPageClick }: {
    currentPage: number,
    totalPages: number,
    type: 'none' | 'thumbnail' | 'dots',
    onPageClick: (index: number) => void
}) => {
    if (type === 'none') {
        return null;
    }

    const paginationAmount = Array.from({ length: totalPages });

    return (<ol data-testid="slider-paginate-list" className={`list-unstyled ${styles.sliderPaginationControls}`}>
        {paginationAmount.map((_, index) => (
            <li data-testid="slider-paginate-item" className={currentPage === (index + 1) ? styles.sliderPaginationControlActive : ''} key={index}>
                <button className={`button ${type === 'dots' ? styles.sliderPaginationControlBubble : ''}`} data-testid="slider-paginate-button" data-slider-paginate-to-index={index} type="button" onClick={() => onPageClick(index)}>
                    <PaginationButtonChild type={type} slideNumber={index + 1} />
                </button>
            </li>
        ))}
    </ol>)

}

export const PageNumberDisplay = ({ currentPage, totalPages, separator }: {
    currentPage: number,
    totalPages: number,
    separator: string
}) => {
    return (
        <div data-testid="slider-page-number">
            <span data-testid="slider-page-number-current">{currentPage}</span>
            <span data-testid="slider-page-number-separator">{separator}</span>
            <span data-testid="slider-page-number-total">{totalPages}</span>
        </div>
    );
}

export default function Slider({ type, slides, showPrevNextButtons, showPageNumber, paginationNavigationType }: Props) {
    const sliderRef = useRef<HTMLOListElement>(null);
    const slidesRef = useRef<Array<HTMLLIElement>>([]);

    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [showPrevBtn, setShowPrevBtn] = useState(false);
    const [showNextBtn, setShowNextBtn] = useState(true);

    const buttonViewScrollThreshold = 20
    const extraListPageThreshold = 20

    // highjack natural arrow to use component function
    const handleSliderKeyDown = (e: React.KeyboardEvent<HTMLOListElement>) => {
        switch (e.key) {
            case 'ArrowRight':
                e.preventDefault()
                goNext(currentPageIndex)
                break
            case 'ArrowLeft':
                e.preventDefault()
                goPrev(currentPageIndex)
                break
            default:
                break
        }
    }

    /**
     * calc how many horizontal view "pages" are available to scroll in the element
     */
    const getTotalPages = () => {
        if (type === 'list') {
            const sliderWidth = sliderRef?.current?.clientWidth ?? 0;
            const sliderItemsWith = sliderRef?.current?.scrollWidth ?? 0;
            // if all elements are in view on current screen size there is only 1 page
            if (
                sliderItemsWith - sliderWidth <=
                buttonViewScrollThreshold
            ) {
                return 1;
            }
            // do the pages fit within the scroll width available
            const pageRemainder = sliderItemsWith % sliderWidth
            let pagesPerPageWidth = Math.floor(
                sliderItemsWith / sliderWidth
            )
            // if the remainder was large enough add another page
            // to be able to scroll to it
            if (pageRemainder >= extraListPageThreshold) {
                pagesPerPageWidth += 1
            }
            return pagesPerPageWidth;
        }

        return slidesRef.current.length || 0;
    }

    /**
     * calc which page the horizontal scroll is sitting at
     * manual scroll can end up half way between 2 pages
     */
    const calcCurrentPageIndex = () => {
        // Element scroll left 0 = first page
        if (sliderRef?.current?.scrollLeft === 0) {
            setCurrentPageIndex(0)
            return;
        }
        const currentScroll = sliderRef?.current?.scrollLeft ?? 0
        const sliderWidth = sliderRef?.current?.clientWidth ?? 0
        const pageScroll = +(currentScroll / sliderWidth).toFixed(2)

        if (type === 'slide') {
            setCurrentPageIndex(Math.round(pageScroll))
            return;
        }

        if (type === 'list') {
            const listPageThreshold = 0.2

            if (pageScroll % 1 > listPageThreshold) {
                setCurrentPageIndex(Math.ceil(pageScroll))
                return
            } else {
                setCurrentPageIndex(Math.round(pageScroll))
                return
            }
        }
    }

    /**
     * calc how much to shift the scroll
     * to an index to shift to certain page location/distance
     * @return {number} shift total
     */
    const indexScrollingDistance = (index: number): number => {
        const totalPages = getTotalPages();
        const coercedIndex = Math.max(0, Math.min(index, totalPages - 1))
        const indexDistance = (sliderRef?.current?.clientWidth ?? 0) * coercedIndex
        const totalScrollDistance = sliderRef?.current?.scrollWidth ?? 0
        const finalDistance =
            totalScrollDistance < indexDistance ? totalScrollDistance : indexDistance

        return finalDistance
    }

    const determineShowPrevBtn = (scrollPosition: number): boolean => {
        return !(scrollPosition <= buttonViewScrollThreshold)
    }

    const determineShowNextBtn = (scrollPosition: number): boolean => {
        const totalScrollDistance = sliderRef?.current?.scrollWidth ?? 0
        const sliderWidth = sliderRef?.current?.clientWidth ?? 0
        const fullDepth = totalScrollDistance - sliderWidth - buttonViewScrollThreshold
        return !(fullDepth <= scrollPosition)
    }

    const goPrev = (index: number) => {
        goToIndex(index - 1)
    }

    const goNext = (index: number) => {
        goToIndex(index + 1)
    }

    const throttleScrollLeftCalc = useThrottle(calcCurrentPageIndex, 200)
    const throttlePageIndex = useThrottle(currentPageIndex, 200)

    /**
     * scroll the given slide index
     * scroll event will be triggered and reconsider view values
     */
    const goToIndex = (index: number) => {
        if (!sliderRef.current) return;
        const newScrollLeft = indexScrollingDistance(index);
        sliderRef.current.scrollLeft = newScrollLeft
        setCurrentPageIndex(index)
        setShowPrevBtn(determineShowPrevBtn(newScrollLeft))
        setShowNextBtn(determineShowNextBtn(newScrollLeft))
        throttleScrollLeftCalc
    }

    const windowSize = useWindowSize()
    useEffect(() => {
        if (type === 'list') {
            calcCurrentPageIndex()
        }
    }, [windowSize.width])

    const memoizedNextBtn = useMemo(() => {
        if (!showPrevNextButtons) {
            return null;
        }
        return <button className={`button button--icon button--secondary ${styles.sliderButton}  ${styles.sliderButtonNext} ${showNextBtn ? styles.sliderButtonVisible : ''}`} type="button" data-testid="slider-button-next" onClick={() => goNext(throttlePageIndex)}>
            <span className='sr-only'>Next</span> &#8594;
        </button>

    }, [showPrevNextButtons, showNextBtn, throttlePageIndex])

    const memoizedPrevBtn = useMemo(() => {
        if (!showPrevNextButtons) {
            return null;
        }

        return <button className={`button button--icon button--secondary ${styles.sliderButton}  ${styles.sliderButtonPrev}  ${showPrevBtn ? styles.sliderButtonVisible : ''}`} type="button" data-testid="slider-button-prev" onClick={() => goPrev(throttlePageIndex)}>
            &#8592; <span className='sr-only'>Previous</span>
        </button>
    }, [showPrevNextButtons, showPrevBtn, throttlePageIndex])

    const memoizedPageNumber = useMemo(() => {
        if (!showPageNumber) {
            return null;
        }
        const totalPages = getTotalPages();
        return <PageNumberDisplay currentPage={throttlePageIndex + 1} totalPages={totalPages} separator="/" />
    }, [showPageNumber, getTotalPages, throttlePageIndex])

    const memoizedPaginationNavigation = useMemo(() => {
        return <PaginationNavigation currentPage={throttlePageIndex + 1} totalPages={getTotalPages()} type={paginationNavigationType} onPageClick={(i) => goToIndex(i)} />
    }, [paginationNavigationType, getTotalPages, throttlePageIndex])

    return (
        <div data-testid="slider" className={styles.slider} >
            {memoizedPrevBtn}

            {/* The slider list is a list of items that can be scrolled through. 
                allow keyboard-focus on the scrolling element */ }
            <ol ref={sliderRef} data-testid="slider-list" tabIndex={0} onKeyDown={(e) => handleSliderKeyDown(e)} className={styles.sliderList} >
                {slides.map((slide, idx) => (
                    <li className={`${styles.sliderListItem} ${type === 'slide' ? styles.sliderListItemSlide : ''}`} key={idx} ref={(el) => (slidesRef.current[idx] = el!)} data-testid="slider-list-item">
                        {slide}
                    </li>
                ))}
            </ol>

            {memoizedNextBtn}
            {memoizedPageNumber}
            {memoizedPaginationNavigation}
        </div>
    );
}
