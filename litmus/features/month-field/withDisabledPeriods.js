import { LabelsLeftLayout, LabelsTopLayout } from "cx/ui";
import { LabeledContainer, MonthField, MonthPicker } from "cx/widgets";

export default () => (
   <cx>
      <div
         style="margin: 20px;"
         controller={{
            onInit() {
               this.store.set("$page.value", new Date());
               this.store.set("$page.value2", new Date());
               this.store.set("$page.disabledValues", {
                  years: [2021, 2022, 2027],
                  months: {
                     2023: [4, 5, 6, 7],
                     2025: [12],
                     2026: [1, 4, 7],
                  },
                  quarters: {
                     2024: [1, 3],
                  },
               });
            },
         }}
      >
         <LabelsTopLayout vertical columns={3}>
            <LabeledContainer label="Normal Month Field">
               <MonthField
                  value-bind="$page.value"
                  monthPickerOptions={{ startYear: 2015 }}
                  minValue={new Date(2020, 1, 1)}
               />
            </LabeledContainer>
            <LabeledContainer label="With custom disabled periods">
               <MonthField
                  value-bind="$page.value2"
                  monthPickerOptions={{
                     startYear: 2015,
                  }}
                  disabledPeriods={{
                     years: [2021, 2022, 2027],
                     months: {
                        2023: [4, 5, 6, 7],
                        2025: [12],
                        2026: [1, 4, 7],
                     },
                     quarters: {
                        2024: [1, 3],
                     },
                  }}
               />
            </LabeledContainer>
            <LabeledContainer label="With custom disabled periods (binding from the store)">
               <MonthField
                  value-bind="$page.value2"
                  monthPickerOptions={{
                     startYear: 2015,
                  }}
                  disabledPeriods-bind="$page.disabledValues"
               />
            </LabeledContainer>

            <LabeledContainer label="Normal Month Picker (with minValue and startYear)">
               <MonthPicker value-bind="$page.value" startYear={2015} minValue={new Date(2020, 1, 1)} />
            </LabeledContainer>
            <LabeledContainer label="Month Picker with custom disabled periods">
               <MonthPicker
                  value-bind="$page.value2"
                  startYear={2015}
                  disabledPeriods={{
                     years: [2021, 2022, 2028],
                     months: {
                        2023: [4, 5, 6, 7],
                        2025: [12],
                        2026: [1, 4, 7],
                     },
                     quarters: {
                        2024: [1, 3],
                     },
                  }}
               />
            </LabeledContainer>
         </LabelsTopLayout>
      </div>
   </cx>
);
