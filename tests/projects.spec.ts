import { test, expect } from '@playwright/test';

test('projects page, filter', async ({ page }) => {
    await page.goto('/projects');

    // default projects list all
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toBeVisible();
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('projects');

    // filter accordion default open
    await expect(page.getByText('Search Projects')).toBeVisible();
    await expect(page.getByText('Filter by Project Type')).toBeVisible();
    // accordion collapse
    await page.getByText('Filter Projects').click();
    await expect(page.getByText('Filter by Project Type')).not.toBeVisible();
    // accordion re-open
    await page.getByText('Filter Projects').click();
    await expect(page.getByText('Filter by Project Type')).toBeVisible();

    // search for projects
    await page.getByRole('searchbox', { name: 'Search Projects' }).click();
    await page.getByRole('searchbox', { name: 'Search Projects' }).fill('dj');
    // results for search
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('projects for search dj');
    await expect(page.getByRole('link', { name: 'Postmedia Design System' })).toBeVisible();
    // clear search
    await page.getByTestId('ncmp-search-field-reset').click();
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('projects');

    // filter by project type
    await page.getByRole('radio', { name: 'Design System' }).check();
    // projects for design system
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('projects for project type design system');
    await expect(page.getByRole('link', { name: 'Postmedia Design System' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Styleguide Design System' })).toBeVisible();

    // other project types
    await page.getByRole('radio', { name: 'Web Application' }).check();
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('projects for project type web application');
    await page.getByRole('radio', { name: 'Website' }).check();
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('projects for project type website');
    await page.getByRole('radio', { name: 'Code Snippet' }).check();
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('projects for project type code snippet');

    // reset project type
    await page.getByRole('radio', { name: 'All' }).check();
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('projects');


    // search and project type
    await page.getByRole('radio', { name: 'Code Snippet' }).check();
    await page.getByRole('searchbox', { name: 'Search Projects' }).click();
    await page.getByRole('searchbox', { name: 'Search Projects' }).fill('grid');
    await expect(page.getByTestId('ncmp-project-filter-form-status')).toContainText('projects for search grid and project type code snippet');
    await expect(page.getByRole('link', { name: 'CSS Grid Newspaper Layout Pen' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'CSS Grid Pull Quote Pen Code' })).toBeVisible();
});