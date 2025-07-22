import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: {
    browserName: 'chromium',
    headless: true,
    //baseURL: 'https://your-app-url.com', // optional
    viewport: { width: 1280, height: 720 },
    launchOptions: {
      args: ['--start-maximized'],
    },
  },
  projects: [
    {
      name: 'Chrome-LambdaTest',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({
            browserName: 'Chrome',
            browserVersion: 'latest',
            platform: 'Windows 10',
            name: 'Playwright Test',
            build: 'Playwright Build',
            user: 'jayathirtha3',
            accessKey: 'LT_uuGArh2n4WJdfPQoCq8BZXmxX7dvmcvXvVL11YC6IF9Zg5Z'
          }))}`,
        },
      },
    },
  ],
});
