import { Page, Locator } from "@playwright/test";
// @ts-ignore
import moment from "moment";
import { MonthNames } from "../../constants/MonthNames";

export class CalendarPage {
    readonly page: Page;
    private readonly _calendarWindow: Locator;
    private readonly _calendarWindowResetButton: Locator;
    private readonly _calendarWindowConfirmButton: Locator;
    private readonly _dateTimeLeftBlock: Locator;
    private readonly _dateTimeRightBlock: Locator;
    private readonly _dateTimeLeftBlockInputDateField: Locator;
    private readonly _dateTimeLeftBlockInputTimeField: Locator;
    private readonly _dateTimeLeftBlockIconCloseButton: Locator;
    private readonly _dateTimeRightBlockInputDateField: Locator;
    private readonly _dateTimeRightBlockInputTimeField: Locator;
    private readonly _dateTimeRightBlockIconCloseButton: Locator;
    private readonly _dataListContentBlock: Locator;
    private readonly _dataListContentBlockTodayItem: Locator;
    private readonly _dataListContentBlockYesterdayItem: Locator;
    private readonly _dataListContentBlockWeekItem: Locator;
    private readonly _dataListContentBlock2WeeksItem: Locator;
    private readonly _dataListContentBlockMonthItem: Locator;
    private readonly _calendarDataBlock: Locator;
    private readonly _calendarDataBlockPrevMonthButton: Locator;
    private readonly _calendarDataBlockNextMonthButton: Locator;
    private readonly _calendarDataBlockIncreaseMonthButton: Locator;
    private readonly _calendarDataBlockDecreaseMonthButton: Locator;
    private readonly _calendarDataBlockWeekdayContainer: Locator;
    private readonly _calendarDataBlockDayContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this._calendarWindow = this.page.locator(".flatpickr-in-dropdown");
        this._calendarWindowResetButton = this._calendarWindow.locator("button").nth(2);
        this._calendarWindowConfirmButton = this._calendarWindow.getByRole("button", { name: " Confirm " });
        this._dateTimeLeftBlock = this._calendarWindow.locator(".date-time-wrapper").nth(0);
        this._dateTimeRightBlock = this._calendarWindow.locator(".date-time-wrapper").nth(1);
        this._dateTimeLeftBlockInputDateField = this._calendarWindow.locator(".form-control-icon").nth(1);
        this._dateTimeLeftBlockInputTimeField = this._dateTimeLeftBlock.locator("input").nth(1);
        this._dateTimeLeftBlockIconCloseButton = this._dateTimeLeftBlock.locator("button");
        this._dateTimeRightBlockInputDateField = this._dateTimeRightBlock.locator("input").nth(0);
        this._dateTimeRightBlockInputTimeField = this._dateTimeRightBlock.locator("input").nth(1);
        this._dateTimeRightBlockIconCloseButton = this._dateTimeRightBlock.locator("button");
        this._dataListContentBlock = this._calendarWindow.locator(".data-list-content");
        this._dataListContentBlockTodayItem = this._dataListContentBlock.locator("app-data-list-item").nth(0);
        this._dataListContentBlockYesterdayItem = this._dataListContentBlock.locator("app-data-list-item").nth(1);
        this._dataListContentBlockWeekItem = this._dataListContentBlock.locator("app-data-list-item").nth(2);
        this._dataListContentBlock2WeeksItem = this._dataListContentBlock.locator("app-data-list-item").nth(3);
        this._dataListContentBlockMonthItem = this._dataListContentBlock.locator("app-data-list-item").nth(4);
        this._calendarDataBlock = this._calendarWindow.locator(".flatpickr-calendar");
        this._calendarDataBlockPrevMonthButton = this._calendarDataBlock.locator(".flatpickr-prev-month");
        this._calendarDataBlockNextMonthButton = this._calendarDataBlock.locator(".flatpickr-next-month");
        this._calendarDataBlockIncreaseMonthButton = this._calendarDataBlock.locator(".arrowUp");
        this._calendarDataBlockDecreaseMonthButton = this._calendarDataBlock.locator(".arrowDown");
        this._calendarDataBlockWeekdayContainer = this._calendarDataBlock.locator(".flatpickr-weekdaycontainer");
        this._calendarDataBlockDayContainer = this._calendarDataBlock.locator(".dayContainer");
    }

    get calendarWindow(): Locator {
        return this._calendarWindow;
    }

    get calendarWindowResetButton(): Locator {
        return this._calendarWindowResetButton;
    }

    get calendarWindowConfirmButton(): Locator {
        return this._calendarWindowConfirmButton;
    }

    get dateTimeLeftBlock(): Locator {
        return this._dateTimeLeftBlock;
    }

    get dateTimeRightBlock(): Locator {
        return this._dateTimeRightBlock;
    }

    get dateTimeLeftBlockInputDateField(): Locator {
        return this._dateTimeLeftBlockInputDateField;
    }

    get dateTimeLeftBlockInputTimeField(): Locator {
        return this._dateTimeLeftBlockInputTimeField;
    }

    get dateTimeLeftBlockIconCloseButton(): Locator {
        return this._dateTimeLeftBlockIconCloseButton;
    }

    get dateTimeRightBlockInputDateField(): Locator {
        return this._dateTimeRightBlockInputDateField;
    }

    get dateTimeRightBlockInputTimeField(): Locator {
        return this._dateTimeRightBlockInputTimeField;
    }

    get dateTimeRightBlockIconCloseButton(): Locator {
        return this._dateTimeRightBlockIconCloseButton;
    }

    get dataListContentBlock(): Locator {
        return this._dataListContentBlock;
    }

    get dataListContentBlockTodayItem(): Locator {
        return this._dataListContentBlockTodayItem;
    }

    get dataListContentBlockYesterdayItem(): Locator {
        return this._dataListContentBlockYesterdayItem;
    }

    get dataListContentBlockWeekItem(): Locator {
        return this._dataListContentBlockWeekItem;
    }

    get dataListContentBlock2WeeksItem(): Locator {
        return this._dataListContentBlock2WeeksItem;
    }

    get dataListContentBlockMonthItem(): Locator {
        return this._dataListContentBlockMonthItem;
    }

    get calendarDataBlock(): Locator {
        return this._calendarDataBlock;
    }

    get calendarDataBlockPrevMonthButton(): Locator {
        return this._calendarDataBlockPrevMonthButton;
    }

    get calendarDataBlockNextMonthButton(): Locator {
        return this._calendarDataBlockNextMonthButton;
    }

    get calendarDataBlockIncreaseMonthButton(): Locator {
        return this._calendarDataBlockIncreaseMonthButton;
    }

    get calendarDataBlockDecreaseMonthButton(): Locator {
        return this._calendarDataBlockDecreaseMonthButton;
    }

    get calendarDataBlockWeekdayContainer(): Locator {
        return this._calendarDataBlockWeekdayContainer;
    }

    get calendarDataBlockDayContainer(): Locator {
        return this._calendarDataBlockDayContainer;
    }

    async   fillDateTimeLeftBlockInputDateField(date: string) {
        await this.dateTimeLeftBlockInputDateField.clear();
        await this.dateTimeLeftBlockInputDateField.fill(date);
    }

    async fillDateTimeLeftBlockInputTimeField(date: string) {
        await this.dateTimeLeftBlockInputTimeField.clear();
        await this.dateTimeLeftBlockInputTimeField.fill(date);
    }

    async clickOnDataListContentBlockYesterdayItem() {
        await this.dataListContentBlockYesterdayItem.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnDataListContentBlockWeekItem() {
        await this.dataListContentBlockWeekItem.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnDataListContentBlock2WeeksItem() {
        await this.dataListContentBlock2WeeksItem.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnDataListContentBlockMonthItem() {
        await this.dataListContentBlockMonthItem.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnCalendarDataBlockPrevMonthButton() {
        await this.calendarDataBlockPrevMonthButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnCalendarDataBlockNextMonthButton() {
        await this.calendarDataBlockNextMonthButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnCalendarWindowResetButton() {
        await this.calendarWindowResetButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnCalendarWindowConfirmButton() {
        await this.calendarWindowConfirmButton.click();
        await this.page.waitForTimeout(1000);
    }

    async selectDate(date: string) { //December 11, 2025
        await this.page.locator(`span[aria-label="${date}"]`).click();
    }

    async selectLastTimePeriodViaCalendarDays(timePeriod: string) {
        const currentDate: string = moment().format("DD.MM.YYYY");
        const currentDateArray: string[] = currentDate.split(".");
        const currentDay: string = currentDateArray[0][0] === "0" ? currentDateArray[0].slice(1) : currentDateArray[0];
        const currentMonth: string = MonthNames[currentDateArray[1]];
        const currentYear: string = currentDateArray[2];
        const currentDateLabel: string = `${currentMonth} ${currentDay}, ${currentYear}`;

        let isLastMonth: boolean = false;
        let beforeDateLabel: string;

        switch (timePeriod) {
            case "Today": {
                beforeDateLabel = currentDateLabel;
                isLastMonth = false;
                break;
            }
            case "Yesterday": {
                const beforeDayDate: string = moment().subtract(1, "day").format("DD.MM.YYYY");
                const beforeDayDateArray: string[] = beforeDayDate.split(".");
                const beforeDay: string = beforeDayDateArray[0][0] === "0" ? beforeDayDateArray[0].slice(1) : beforeDayDateArray[0];
                const beforeMonth: string = MonthNames[beforeDayDateArray[1]];
                const beforeYear: string = beforeDayDateArray[2];

                beforeDateLabel = `${beforeMonth} ${beforeDay}, ${beforeYear}`;
                isLastMonth = false;

                break;
            }
            case "Week": {
                const beforeWeekDate: string = moment().subtract(1, "week").format("DD.MM.YYYY");
                const beforeWeekDateArray: string[] = beforeWeekDate.split(".");
                const beforeWeekDay: string = beforeWeekDateArray[0][0] === "0" ? beforeWeekDateArray[0].slice(1) : beforeWeekDateArray[0];
                const beforeWeekMonth: string = MonthNames[beforeWeekDateArray[1]];
                const beforeWeekYear: string = beforeWeekDateArray[2];

                if (Number(beforeWeekDay) - 7 <= 0) {
                    await this.calendarDataBlockPrevMonthButton.click();
                    isLastMonth = true;
                }

                beforeDateLabel = `${beforeWeekMonth} ${beforeWeekDay}, ${beforeWeekYear}`;

                break;
            }
            case "2 weeks": {
                const before2WeeksDate: string = moment().subtract(2, "weeks").format("DD.MM.YYYY");
                const before2WeeksDateArray: string[] = before2WeeksDate.split(".");
                const before2WeeksDay: string = before2WeeksDateArray[0][0] === "0" ? before2WeeksDateArray[0].slice(1) : before2WeeksDateArray[0];
                const before2WeeksMonth: string = MonthNames[before2WeeksDateArray[1]];
                const before2WeeksYear: string = before2WeeksDateArray[2];

                if (Number(currentDay) - 14 <= 0) {
                    await this.calendarDataBlockPrevMonthButton.click();
                    isLastMonth = true;
                }

                beforeDateLabel = `${before2WeeksMonth} ${before2WeeksDay}, ${before2WeeksYear}`;

                break;
            }
            case "Month": {
                const beforeMonthDate: string = moment().subtract(1, "month").format("DD.MM.YYYY");
                const beforeMonthDateArray: string[] = beforeMonthDate.split(".");
                const beforeMonthDay: string = beforeMonthDateArray[0][0] === "0" ? beforeMonthDateArray[0].slice(1) : beforeMonthDateArray[0];
                const beforeMonthMonth: string = MonthNames[beforeMonthDateArray[1]];
                const beforeMonthYear: string = beforeMonthDateArray[2];

                if (Number(currentDay) - 14 <= 0) {
                    await this.calendarDataBlockPrevMonthButton.click();
                    isLastMonth = true;
                }

                beforeDateLabel = `${beforeMonthMonth} ${beforeMonthDay}, ${beforeMonthYear}`;

                break;
            }
            default: {
                let days: number = 0;
                try {
                    days = Number(timePeriod.split(" ")[0]);
                } catch (error) {
                    console.log("Incorrect sending data!")
                }
                const beforePeriodDate: string = moment().subtract(days, "days").format("DD.MM.YYYY");
                const beforePeriodDateArray: string[] = beforePeriodDate.split(".");
                const beforePeriodDay: string = beforePeriodDateArray[0][0] === "0" ? beforePeriodDateArray[0].slice(1) : beforePeriodDateArray[0];
                const beforePeriodMonth: string = MonthNames[beforePeriodDateArray[1]];
                const beforePeriodYear: string = beforePeriodDateArray[2];

                if (Number(currentDay) - days <= 0) {
                    await this.calendarDataBlockPrevMonthButton.click();
                    isLastMonth = true;
                }

                beforeDateLabel = `${beforePeriodMonth} ${beforePeriodDay}, ${beforePeriodYear}`;
            }
        }
        await this.page.locator(`span[aria-label='${beforeDateLabel}']`).click();
        await this.page.waitForTimeout(500);

        if (isLastMonth) {
            await this.calendarDataBlockNextMonthButton.click();
            await this.page.waitForTimeout(500);
            await this.page.locator(`span[aria-label='${currentDateLabel}']`).click();
            await this.page.waitForTimeout(500);
        }

        await this.calendarWindowConfirmButton.click();
    }

    async selectLastMonthTimePeriodViaShortcutItem(buttonName: string) {
        switch (buttonName) {
            case "Today": {
                await this.dataListContentBlockTodayItem.click();
                break;
            }
            case "Yesterday": {
                await this.dataListContentBlockYesterdayItem.click();
                break;
            }
            case "Week": {
                await this.dataListContentBlockWeekItem.click();
                break;
            }
            case "2 weeks": {
                await this.dataListContentBlock2WeeksItem.click();
                break;
            }
            default: {
                await this.dataListContentBlockMonthItem.click();
                break;
            }
        }

        await this.page.waitForTimeout(1000);
        await this.calendarWindowConfirmButton.click();
    }

    async selectLastMonthTimePeriodViaFillingField(timePeriod: string) {
        let beforeDate: string;

        switch (timePeriod) {
            case "Today": {
                beforeDate = moment().format("DD.MM.YYYY");
                break;
            }
            case "Yesterday": {
                beforeDate = moment().subtract(1, "day").format("DD.MM.YYYY");
                break;
            }
            case "Week": {
                beforeDate = moment().subtract(1, "week").format("DD.MM.YYYY");
                break;
            }
            case "2 weeks": {
                beforeDate = moment().subtract(2, "weeks").format("DD.MM.YYYY");
                break;
            }
            case "Month": {
                beforeDate = moment().subtract(1, "month").format("DD.MM.YYYY");
                break;
            }
            default: {
                let days: number = 0;
                try {
                    days = Number(timePeriod.split(" ")[0]);
                } catch (error) {
                    console.log("Incorrect sending data!")
                }
                beforeDate = moment().subtract(days, "days").format("DD.MM.YYYY");
            }
        }

        await this.dateTimeLeftBlockInputDateField.clear();
        await this.dateTimeLeftBlockInputDateField.fill(beforeDate);

        await this.page.waitForTimeout(1000);
        await this.calendarWindowConfirmButton.click();
    }
}