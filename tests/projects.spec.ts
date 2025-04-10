import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/projects');

    // default projects list all
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toBeVisible();
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('34 projects');

    // filter accordion default open
    await expect(page.getByText('Search Projects')).toBeVisible();
    await expect(page.getByText('Search Projects✖clear searchFilter by Project TypeAllDesign SystemWeb')).toBeVisible();
    // accordion collapse
    await page.getByText('Filter Projects').click();
    await expect(page.getByText('Search Projects✖clear searchFilter by Project TypeAllDesign SystemWeb')).not.toBeVisible();
    // accordion re-open
    await page.getByText('Filter Projects').click();
    await expect(page.getByText('Search Projects✖clear searchFilter by Project TypeAllDesign SystemWeb')).toBeVisible();

    // search for projects
    await page.getByRole('searchbox', { name: 'Search Projects' }).click();
    await page.getByRole('searchbox', { name: 'Search Projects' }).fill('dj');
    // results for search
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('1 projects for search dj');
    await expect(page.getByRole('link', { name: 'Postmedia Design System' })).toBeVisible();
    // clear search
    await page.getByRole('button', { name: '✖ clear search' }).click();
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('34 projects');

    // filter by project type
    await page.getByRole('radio', { name: 'Design System' }).check();
    // projects for design system
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('2 projects for project type design system');
    await expect(page.getByRole('link', { name: 'Postmedia Design System' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Styleguide Design System' })).toBeVisible();

    // other project types
    await page.getByRole('radio', { name: 'Web Application' }).check();
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('2 projects for project type web application');
    await page.getByRole('radio', { name: 'Website' }).check();
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('7 projects for project type website');
    await page.getByRole('radio', { name: 'Code Snippet' }).check();
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('23 projects for project type code snippet');

    // reset project type
    await page.getByRole('radio', { name: 'All' }).check();
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('34 projects');


    // search and project type
    await page.getByRole('radio', { name: 'Code Snippet' }).check();
    await page.getByRole('searchbox', { name: 'Search Projects' }).click();
    await page.getByRole('searchbox', { name: 'Search Projects' }).fill('grid');
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('5 projects for search grid and project type code snippet');
    await expect(page.getByRole('link', { name: 'CSS Grid Newspaper Layout Pen' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'CSS Grid Pull Quote Pen Code' })).toBeVisible();
});