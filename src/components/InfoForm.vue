<template>
  <v-container fluid class="ml-md-6">
    <v-card color="blue lighten-3">
      <v-card-title style="font-family: sans-serif"> New Risk </v-card-title>
    </v-card>

    <v-card
      title="Risk Information"
      color="info"
      class="pe-3 mt-4 mx-auto"
      variant="outlined"
    >
      <v-form @submit.prevent>
        <v-container>
          <v-row>
            <v-col cols="12" lg="4" sm="6" md="4">
              <v-text-field
                label="Policy Number"
                variant="outlined"
                clearable
                @click="!loading"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="4" sm="6" md="4">
              <v-text-field
                label="Insured Name"
                variant="outlined"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="4" sm="6" md="4">
              <v-autocomplete
                variant="outlined"
                clearable
                label="Insurance or Broker"
                :items="[
                  'Exos Re',
                  'Juba Insurance Company',
                  'Broknet',
                  'IIC',
                  'AL-Awael Insurance Company',
                  'Be-live Broker',
                  'Tripolis Broker',
                  'Sen Re',
                  'Mare Re',
                  'GIG',
                  'MOHANDES INSURANCE CO',
                  'Delta Insurance Company',
                  'Apex',
                  'Qafela Insurance Company',
                  'Taring al harer International Trade Company',
                  'Al Taawuniya Insurance Co',
                  'Other',
                ]"
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" lg="3" sm="6" md="3">
              <v-autocomplete
                variant="outlined"
                clearable
                label="Quarter"
                :items="['1st', '2nd', '3rd', '4th']"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" lg="3" sm="6" md="3">
              <countriesComponent />
            </v-col>
            <v-col cols="12" sm="3">
              <currencyComponent @currency-selected="handleCurrencySelected" />
            </v-col>
            <v-col cols="12" lg="3" sm="6" md="3">
              <v-autocomplete
                variant="outlined"
                clearable
                label="Limit Of Treaty LYD"
                :items="['Libya', 'Regional Business', 'Egypt', 'Other']"
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <v-row class="d-flex justify-center align-start">
                <v-col cols="12" sm="8">
                  <v-text-field
                    type="date"
                    id="From"
                    name="From"
                    variant="outlined"
                    min="1930-01-01"
                    max="2080-12-31"
                    label="From"
                    :disabled="dateFrom"
                    class="w-100"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-checkbox v-model="dateFrom" label="From Open"></v-checkbox>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="6">
              <v-row class="d-flex justify-center align-start">
                <v-col cols="12" sm="8">
                  <v-text-field
                    type="date"
                    id="To"
                    name="To"
                    variant="outlined"
                    min="1930-01-01"
                    max="2080-12-31"
                    label="To"
                    :disabled="dateTo"
                    class="w-100"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-checkbox v-model="dateTo" label="End Open"></v-checkbox>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    type="number"
                    label="PPW"
                    variant="outlined"
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    type="number"
                    label="PML"
                    variant="outlined"
                    clearable
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <v-autocomplete
                variant="outlined"
                clearable
                label="Confirmation"
                :items="['Confirmed', 'Pendding', 'Rejected', 'Canceled']"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                variant="outlined"
                clearable
                label="Closing"
                :items="['Yes', 'No']"
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-textarea
                clearable
                label="Notes"
                variant="outlined"
                no-resize="true"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>

    <v-card
      title="RI/Slip Information"
      color="blue lighten-3"
      class="pe-3 mt-4"
      variant="outlined"
    >
      <v-form @submit.prevent>
        <v-container>
          <v-row>
            <v-col cols="12" lg="4" sm="6" md="4">
              <v-combobox
                variant="outlined"
                clearable
                v-model="selectedPolicyType"
                label="Policy Type"
                :items="[
                  'Fire',
                  'General Accident',
                  'Engineering',
                  'Marine Cargo',
                  'Marine Hull',
                ]"
                @update:modelValue="updateClassBusinessItems"
              ></v-combobox>
            </v-col>
            <v-col cols="12" lg="4" sm="6" md="4">
              <v-combobox
                variant="outlined"
                clearable
                label="Class Of Business"
                :items="classBusinessItems"
              ></v-combobox>
            </v-col>
            <v-col cols="12" lg="4" sm="6" md="4">
              <v-combobox
                v-model="selectedItem"
                :items="TSIItems"
                variant="outlined"
                clearable
                label="Sum Insured"
              ></v-combobox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-chip
                v-for="(chip, index) in selectedChips"
                :key="index"
                closable
                @click:close="removeChip(index, chip)"
                class="ma-3"
              >
                {{ chip }} {{ selectedCurrency }}
              </v-chip>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="SumInsuredPolicy"
                type="number"
                label="Sum Insured"
                variant="outlined"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-btn
                color="blue-lighten-1"
                text-color="white"
                @click="addChip"
                class="pa-3 ma-3"
                >Add</v-btn
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <CoversComponent />
            </v-col>
          </v-row>

          <v-row class="d-flex justify-center">
            <v-col cols="12">
              <AdditinalCoverComponent />
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>

    <v-card
      title="Currency Information"
      color="blue lighten-3"
      class="pe-3 mt-4"
      variant="outlined"
    >
      <v-form @submit.prevent>
        <v-container>
          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field
                type="date"
                id="currencyDate"
                name="currencyDate"
                variant="outlined"
                min="1930-01-01"
                max="2080-12-31"
                label="Date Of Currency"
                class="w-100"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                type="number"
                label="Rate Of Policy Curreny VS USD"
                variant="outlined"
                clearable
                v-model="policyUSDrate"
                :disabled="selectedCurrency == 'USD' ? true : false"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                type="number"
                label="Rate Of LYD VS USD"
                variant="outlined"
                clearable
                v-model="policyLYDrate"
                :disabled="selectedCurrency == 'LYD' ? true : false"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>

    <v-card
      title="Technical Accounts"
      color="blue lighten-3"
      class="pe-3 mt-4"
      variant="outlined"
    >
      <v-form @submit.prevent>
        <v-container>
          <v-row>
            <v-col col="12">
              <v-card
                title="Policy Currency"
                color="blue lighten-3"
                class="pl-3 pr-3"
                variant="outlined"
              >
                <v-row>
                  <v-col cols="12" sm="3">
                    <v-text-field
                      type="number"
                      label="TOTAL SUM INSURED"
                      variant="outlined"
                      clearable
                      :disabled="!isAmount2Checked"
                      click:clear
                      v-model="totalSumInsured"
                      @focus="clearTotalSumInsured"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="3">
                    <v-text-field
                      type="number"
                      label="Premium"
                      variant="outlined"
                      clearable
                      :disabled="!isAmount2Checked"
                      v-model="premium"
                      @focus="clearpremium"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="3">
                    <v-checkbox
                      label="Amount"
                      v-model="isAmount2Checked"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="3">
                    <v-text-field
                      type="number"
                      label="Rate %"
                      variant="outlined"
                      clearable
                      :disabled="isAmount2Checked"
                      @focus="clearrate"
                      v-model="rate"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-col col="12">
              <v-card
                title="Policy Currency Acceptance"
                color="blue lighten-3"
                class="pl-3 pr-3"
                variant="outlined"
              >
                <v-row>
                  <v-col cols="12" sm="3">
                    <v-text-field
                      type="number"
                      label="TOTAL SUM INSURED"
                      variant="outlined"
                      clearable
                      :disabled="!isAmountChecked"
                      v-model="acceptanceSumInsured"
                      @focus="clearacceptanceSumInsured"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="2">
                    <v-text-field
                      type="number"
                      label="PREIUM"
                      variant="outlined"
                      clearable
                      :disabled="!isAmountChecked"
                      v-model="acceptancePremium"
                      @focus="clearacceptancePremium"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="2">
                    <v-checkbox
                      label="Amount"
                      v-model="isAmountChecked"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="2">
                    <v-text-field
                      type="number"
                      label="Our Share %"
                      variant="outlined"
                      clearable
                      :disabled="isAmountChecked"
                      v-model="ourShare"
                      @focus="clearourShare"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="3">
                    <v-text-field
                      type="number"
                      label="Broker Commission %"
                      variant="outlined"
                      clearable
                      v-model="brokerRate"
                      @focus="clearbrokerRaterate"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
    <v-container>
      <v-row class="pt-5 pb-3">
        <v-col>
          <v-sheet elevation="10" rounded="xl">
            <v-sheet class="pa-3 bg-blue lighten-3 text-right" rounded="t-xl">
              <div style="text-align: center">
                <h2>Summary Of Technical Accounts</h2>
              </div>
            </v-sheet>

            <div class="pa-4">
              <h3 style="text-align: center">
                {{ selectedCurrency }} Currency
              </h3>
              <v-chip-group selected-class="text-primary" column>
                <v-chip>
                  <strong>
                    Total Sum Insured: {{ formattedTotalSumInsured }}
                    {{ selectedCurrency }}
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    Premium: {{ formattedPremium }} {{ selectedCurrency }}
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    acceptance Sum Insured:
                    {{ formattedacceptanceSumInsured }} {{ selectedCurrency }}
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    acceptance premium: {{ formattedacceptancePremium }}
                    {{ selectedCurrency }}
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    Broker Amount: {{ formattedpolicyBrokerAmount }}
                    {{ selectedCurrency }}
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    FAC Premium: {{ formattedpolicyFACPremium }}
                    {{ selectedCurrency }}
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    Umbrella Premium 50%: {{ formattedpolicyUmbrellaPremium50 }}
                    {{ selectedCurrency }}
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    Umb Premium 50%: {{ formattedpolicyUmbPremium50 }}
                    {{ selectedCurrency }}
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    Umbrella Commision: {{ formattedpolicyUmbrellaCommision }}
                    {{ selectedCurrency }}
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    Special Retention: {{ formattedpolicySpecialRetention }}
                    {{ selectedCurrency }}
                  </strong>
                </v-chip>
              </v-chip-group>
            </div>

            <div class="pa-4" v-if="selectedCurrency !== 'USD'">
              <h3 style="text-align: center">USD Currency</h3>
              <v-chip-group selected-class="text-primary" column>
                <v-chip>
                  <strong>
                    Total Sum Insured: {{ formattedUSDTSI }} USD
                  </strong>
                </v-chip>
                <v-chip>
                  <strong> Premium: {{ formattedUSDpremium }} USD </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    acceptance Sum Insured:
                    {{ formattedUSDacceptanceSumInsured }} USD
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    acceptance premium:
                    {{ formattedUSDacceptancepremium }} USD
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    Broker Amount: {{ formattedUSDbrokerAmount }} USD
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    FAC Premium: {{ formattedUSDFACPremium }} USD
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    Umbrella Premium 50%:
                    {{ formattedUSDUmbrellaPremium50 }} USD
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    Umb Premium 50%: {{ formattedUSDUmbPremium50 }} USD
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    Umbrella Commision: {{ formattedUSDUmbrellaCommision }} USD
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    Special Retention: {{ formattedUSDSpecialRetention }} USD
                  </strong>
                </v-chip>
              </v-chip-group>
            </div>

            <div class="pa-4" v-if="selectedCurrency !== 'LYD'">
              <h3 style="text-align: center">LYD Currency</h3>
              <v-chip-group selected-class="text-primary" column>
                <v-chip>
                  <strong>
                    Total Sum Insured: {{ formattedULYDSI }} LYD
                  </strong>
                </v-chip>
                <v-chip>
                  <strong> Premium: {{ formattedLYDpremium }} LYD </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    acceptance Sum Insured:
                    {{ formattedLYDacceptanceSumInsured }} LYD
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    acceptance premium:
                    {{ formattedLYDacceptancepremium }} LYD
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    Broker Amount: {{ formattedLYDbrokerAmount }} LYD
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    FAC Premium: {{ formattedLYDFACPremium }} LYD
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    Umbrella Premium 50%:
                    {{ formattedLYDUmbrellaPremium50 }} LYD
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    Umb Premium 50%: {{ formattedLYDUmbPremium50 }} LYD
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    Umbrella Commision: {{ formattedLYDUmbrellaCommision }} LYD
                  </strong>
                </v-chip>
                <v-chip>
                  <strong>
                    Special Retention: {{ formattedLYDSpecialRetention }} LYD
                  </strong>
                </v-chip>
              </v-chip-group>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-checkbox label="Signture" color="blue lighten-3"></v-checkbox>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col col="12" sm="6" class="text-center">
          <div>
            <!-- <v-btn
          class="text-none mb-4"
          color="blue lighten-3"
          size="x-large"
          variant="flat"
         to="/PreviewPrint"
        >
          Preview
        </v-btn> -->
            <PreviewRisk />
          </div>
        </v-col>
        <v-col col="12" sm="6" class="text-center">
          <div>
            <saveButton />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div style="display: none">
      {{ (USDTSI = totalSumInsured / policyUSDrate).toFixed(2) }}
      {{ (USDpremium = premium / policyUSDrate).toFixed(2) }}
      {{
        (USDacceptanceSumInsured =
          acceptanceSumInsured / policyUSDrate).toFixed(2)
      }}
      {{
        (USDacceptancepremium = acceptancePremium / policyUSDrate).toFixed(2)
      }}
      {{
        (USDbrokerAmount =
          ((brokerRate / 100) * acceptancePremium) / policyUSDrate).toFixed(2)
      }}
      {{
        (USDFACPremium =
          (acceptancePremium - (brokerRate / 100) * acceptancePremium) /
          policyUSDrate).toFixed(2)
      }}
      {{ (USDUmbrellaPremium50 = USDFACPremium / 2).toFixed(2) }}
      {{ (USDUmbPremium50 = USDFACPremium / 2).toFixed(2) }}
      {{ (USDUmbrellaCommision = USDUmbPremium50 * 2.2).toFixed(2) }}
      {{ (USDSpecialRetention = 0).toFixed(2) }}
    </div>

    <div style="display: none">
      {{ (policyBrokerAmount = (brokerRate / 100) * acceptancePremium) }}
      {{
        (policyFACPremium =
          acceptancePremium - (brokerRate / 100) * acceptancePremium)
      }}
      {{ (policyUmbrellaPremium50 = policyFACPremium / 2) }}
      {{ (policyUmbPremium50 = policyFACPremium / 2) }}
      {{ (policyUmbrellaCommision = policyUmbPremium50 * 2.2) }}
      {{ (policySpecialRetention = 0) }}
    </div>

    <div style="display: none">
      {{ (LYDTSI = USDTSI * policyLYDrate) }}
      {{ (LYDpremium = USDpremium * policyLYDrate) }}
      {{ (LYDacceptanceSumInsured = USDacceptanceSumInsured * policyLYDrate) }}
      {{ (LYDacceptancepremium = USDacceptancepremium * policyLYDrate) }}
      {{ (LYDbrokerAmount = USDbrokerAmount * policyLYDrate) }}
      {{ (LYDFACPremium = USDFACPremium * policyLYDrate) }}
      {{ (LYDUmbrellaPremium50 = LYDFACPremium / 2) }}
      {{ (LYDUmbPremium50 = LYDFACPremium / 2) }}
      {{ (LYDUmbrellaCommision = LYDUmbPremium50 * 2.2) }}
      {{ (LYDSpecialRetention = 0) }}
    </div>
  </v-container>
</template>
<script setup>
import { ref, watch, computed, reactive, provide } from "vue";
import countriesComponent from "./countriesComponent.vue";
import AdditinalCoverComponent from "./AdditinalCoverComponent.vue";
import currencyComponent from "./currencyComponent.vue";
import CoversComponent from "./CoversComponent.vue";
import { usePolicyStore } from "../stores/policy";
import saveButton from "./saveButton.vue";
import PreviewRisk from "./PreviewRisk.vue";

const dialog = ref(false);

const dateFrom = ref(false);
const dateTo = ref(false);
const loading = ref(false);

const clearTotalSumInsured = () => {
  totalSumInsured.value = "";
};
const clearpremium = () => {
  premium.value = "";
};
const clearrate = () => {
  rate.value = "";
};
const clearbrokerRaterate = () => {
  brokerRate.value = "";
};
const clearacceptanceSumInsured = () => {
  acceptanceSumInsured.value = "";
};
const clearacceptancePremium = () => {
  acceptancePremium.value = "";
};
const clearourShare = () => {
  ourShare.value = "";
};
const clearpolicyUSDrate = () => {
  policyUSDrate.value = "";
};
const setDefaultValue = () => {
  if (policyUSDrate.value <= 1 || policyUSDrate.value != "")
    policyUSDrate.value = "1";
};
const clearpolicyLYDrate = () => {
  policyLYDrate.value = "";
};

const setDefaultValue2 = () => {
  policyLYDrate.value = "1";
};
const policyStore = usePolicyStore();

const totalSumInsured = ref(policyStore.totalSumInsured);
const premium = ref(policyStore.premium);
const isAmount2Checked = ref(policyStore.isAmount2Checked);
const rate = ref(policyStore.rate);
const brokerRate = ref(policyStore.brokerRate);

const acceptanceSumInsured = ref(policyStore.acceptanceSumInsured);
const acceptancePremium = ref(policyStore.acceptancePremium);
const isAmountChecked = ref(policyStore.isAmountChecked);
const ourShare = ref(policyStore.ourShare);
const policyUSDrate = ref(policyStore.policyUSDrate);
const policyLYDrate = ref(policyStore.policyLYDrate);
const selectedPolicyType = ref(null);
const classBusinessItems = ref([]);
const TSIItems = ref([]);

const FireClassBusiness = ref(policyStore.FireClassBusiness);
const EngClassBusiness = ref(policyStore.EngClassBusiness);
const GaClassBusiness = ref(policyStore.GaClassBusiness);
const MarineCargoClassBusiness = ref(policyStore.MarineCargoClassBusiness);
const MarineHullClassBusiness = ref(policyStore.MarineHullClassBusiness);
const TSIFire = ref(policyStore.TSIFire);
const TSIGa = ref(policyStore.TSIGa);
const TSIEngineering = ref(policyStore.TSIEngineering);
const TSIMarineCargo = ref(policyStore.TSIMarineCargo);
const TSIMarineHull = ref(policyStore.TSIMarineHull);

const policyBrokerAmount = ref();
const policyFACPremium = ref();
const policyUmbrellaPremium50 = ref();
const policyUmbPremium50 = ref();
const policyUmbrellaCommision = ref();
const policySpecialRetention = ref();

const USDTSI = ref();
const USDpremium = ref();
const USDacceptanceSumInsured = ref();
const USDacceptancepremium = ref();
const USDbrokerAmount = ref();
const USDFACPremium = ref();
const USDUmbrellaPremium50 = ref();
const USDUmbPremium50 = ref();
const USDUmbrellaCommision = ref();
const USDSpecialRetention = ref();

const LYDTSI = ref();
const LYDpremium = ref();
const LYDacceptanceSumInsured = ref();
const LYDacceptancepremium = ref();
const LYDbrokerAmount = ref();
const LYDFACPremium = ref();
const LYDUmbrellaPremium50 = ref();
const LYDUmbPremium50 = ref();
const LYDUmbrellaCommision = ref();
const LYDSpecialRetention = ref();

const selectedItem = ref(null);
const selectedChips = reactive([]);
const SumInsuredPolicy = ref(0);

const addChip = () => {
  const combinedValue = selectedItem.value + " " + SumInsuredPolicy.value;
  selectedChips.push(combinedValue);
  selectedItem.value = null; // Clear the combobox selection
  SumInsuredPolicy.value = ""; // Clear the text field
};
const removeChip = (index, chip) => {
  selectedChips.splice(index, 1);
  const value = parseFloat(chip.split(" ")[1]);
  if (!isNaN(value)) {
    getTotalSumInsured.value -= value;
  }
};

const getTotalSumInsured = computed(() => {
  return selectedChips.reduce((total, chip) => {
    const value = parseFloat(chip.match(/(\d+(\.\d+)?)/)?.[0] || "0");
    total += isNaN(value) ? 0 : value;
    return total;
  }, 0);
});
watch(getTotalSumInsured, (newTotal) => {
  totalSumInsured.value = newTotal.toString();
});
// Define a variable to store the selected currency
const selectedCurrency = ref(null);

// Define a function to handle the selected currency
const handleCurrencySelected = (value) => {
  return (selectedCurrency.value = value);
};

const updateClassBusinessItems = () => {
  if (selectedPolicyType.value === "Fire") {
    // Set the items for Fire in the second v-combobox
    classBusinessItems.value = FireClassBusiness.value;
    TSIItems.value = TSIFire.value;
  } else if (selectedPolicyType.value === "General Accident") {
    // Set the items for General Accident in the second v-combobox
    classBusinessItems.value = GaClassBusiness.value;
    TSIItems.value = TSIGa.value;
  } else if (selectedPolicyType.value === "Engineering") {
    // Set the items for Engineering in the second v-combobox
    classBusinessItems.value = EngClassBusiness.value;
    TSIItems.value = TSIEngineering.value;
  } else if (selectedPolicyType.value === "Marine Cargo") {
    // Set the items for Marine Cargo in the second v-combobox
    classBusinessItems.value = MarineCargoClassBusiness.value;
    TSIItems.value = TSIMarineCargo.value;
  } else if (selectedPolicyType.value === "Marine Hull") {
    // Set the items for Marine Hull in the second v-combobox
    classBusinessItems.value = MarineHullClassBusiness.value;
    TSIItems.value = TSIMarineHull.value;
  } else {
    // Handle other cases if necessary
    TSIItems.value = [];
  }
};

const updatePremium = () => {
  if (!isAmount2Checked.value) {
    premium.value = totalSumInsured.value * (rate.value / 100);
  } else {
    rate.value = (premium.value / totalSumInsured.value) * 100;
  }
};

// Watch for changes in isAmount2Checked and rate
watch([isAmount2Checked, rate, premium], updatePremium);

// Computed property to format totalSumInsured with thousand separators
const formattedTotalSumInsured = computed(() => {
  return new Intl.NumberFormat("en-US").format(totalSumInsured.value);
});

// Computed property to format premium with thousand separators
const formattedPremium = computed(() => {
  return new Intl.NumberFormat("en-US").format(premium.value);
});
const formattedacceptanceSumInsured = computed(() => {
  return new Intl.NumberFormat("en-US").format(acceptanceSumInsured.value);
});

// Computed property to format premium with thousand separators
const formattedacceptancePremium = computed(() => {
  return new Intl.NumberFormat("en-US").format(acceptancePremium.value);
});
const formattedpolicyBrokerAmount = computed(() => {
  return new Intl.NumberFormat("en-US").format(policyBrokerAmount.value);
});

// Computed property to format premium with thousand separators
const formattedpolicyFACPremium = computed(() => {
  return new Intl.NumberFormat("en-US").format(policyFACPremium.value);
});
// Computed property to format premium with thousand separators
const formattedUSDTSI = computed(() => {
  return new Intl.NumberFormat("en-US").format(USDTSI.value);
});
// Computed property to format premium with thousand separators
const formattedUSDpremium = computed(() => {
  return new Intl.NumberFormat("en-US").format(USDpremium.value);
});
// Computed property to format premium with thousand separators
const formattedUSDacceptanceSumInsured = computed(() => {
  return new Intl.NumberFormat("en-US").format(USDacceptanceSumInsured.value);
});
// Computed property to format premium with thousand separators
const formattedUSDacceptancepremium = computed(() => {
  return new Intl.NumberFormat("en-US").format(USDacceptancepremium.value);
});
// Computed property to format premium with thousand separators
const formattedUSDbrokerAmount = computed(() => {
  return new Intl.NumberFormat("en-US").format(USDbrokerAmount.value);
});
// Computed property to format premium with thousand separators
const formattedUSDFACPremium = computed(() => {
  return new Intl.NumberFormat("en-US").format(USDFACPremium.value);
});

// Computed property to format premium with thousand separators
const formattedULYDSI = computed(() => {
  return new Intl.NumberFormat("en-US").format(LYDTSI.value);
});
// Computed property to format premium with thousand separators
const formattedLYDpremium = computed(() => {
  return new Intl.NumberFormat("en-US").format(LYDpremium.value);
});
// Computed property to format premium with thousand separators
const formattedLYDacceptanceSumInsured = computed(() => {
  return new Intl.NumberFormat("en-US").format(LYDacceptanceSumInsured.value);
});
// Computed property to format premium with thousand separators
const formattedLYDacceptancepremium = computed(() => {
  return new Intl.NumberFormat("en-US").format(LYDacceptancepremium.value);
});
// Computed property to format premium with thousand separators
const formattedLYDbrokerAmount = computed(() => {
  return new Intl.NumberFormat("en-US").format(LYDbrokerAmount.value);
});
// Computed property to format premium with thousand separators
const formattedLYDFACPremium = computed(() => {
  return new Intl.NumberFormat("en-US").format(LYDFACPremium.value);
});
// Computed property to format premium with thousand separators
const formattedpolicyUmbrellaPremium50 = computed(() => {
  return new Intl.NumberFormat("en-US").format(policyUmbrellaPremium50.value);
});
// Computed property to format premium with thousand separators
const formattedpolicyUmbPremium50 = computed(() => {
  return new Intl.NumberFormat("en-US").format(policyUmbPremium50.value);
});
// Computed property to format premium with thousand separators
const formattedpolicyUmbrellaCommision = computed(() => {
  return new Intl.NumberFormat("en-US").format(policyUmbrellaCommision.value);
});
// Computed property to format premium with thousand separators
const formattedpolicySpecialRetention = computed(() => {
  return new Intl.NumberFormat("en-US").format(policySpecialRetention.value);
});
// Computed property to format premium with thousand separators
const formattedUSDUmbrellaPremium50 = computed(() => {
  return new Intl.NumberFormat("en-US").format(USDUmbrellaPremium50.value);
});
// Computed property to format premium with thousand separators
const formattedUSDUmbPremium50 = computed(() => {
  return new Intl.NumberFormat("en-US").format(USDUmbPremium50.value);
});
// Computed property to format premium with thousand separators
const formattedUSDUmbrellaCommision = computed(() => {
  return new Intl.NumberFormat("en-US").format(USDUmbrellaCommision.value);
});
// Computed property to format premium with thousand separators
const formattedUSDpolicySpecialRetention = computed(() => {
  return new Intl.NumberFormat("en-US").format(USDSpecialRetention.value);
});
// Computed property to format premium with thousand separators
const formattedLYDUmbrellaPremium50 = computed(() => {
  return new Intl.NumberFormat("en-US").format(LYDUmbrellaPremium50.value);
});
// Computed property to format premium with thousand separators
const formattedLYDUmbPremium50 = computed(() => {
  return new Intl.NumberFormat("en-US").format(LYDUmbPremium50.value);
});
// Computed property to format premium with thousand separators
const formattedLYDUmbrellaCommision = computed(() => {
  return new Intl.NumberFormat("en-US").format(LYDUmbrellaCommision.value);
});
// Computed property to format premium with thousand separators
const formattedLYDpolicySpecialRetention = computed(() => {
  return new Intl.NumberFormat("en-US").format(LYDSpecialRetention.value);
});

const updateacceptancePremium = () => {
  if (!isAmountChecked.value) {
    acceptanceSumInsured.value = (ourShare.value / 100) * totalSumInsured.value;
  } else {
    ourShare.value =
      (acceptancePremium.value / acceptanceSumInsured.value) * 100;
  }
};
const updateacceptancePremium2 = () => {
  if (!isAmountChecked.value) {
    acceptancePremium.value = acceptanceSumInsured.value * (rate.value / 100);
  }
};

provide("Print", {
  policyUSDrate,
  policyLYDrate,
  formattedTotalSumInsured,
   formattedPremium,
  selectedCurrency,
  formattedacceptanceSumInsured,
  formattedacceptancePremium,
  formattedUSDacceptanceSumInsured,
  formattedUSDacceptancepremium,
  formattedLYDacceptanceSumInsured,
  formattedLYDacceptancepremium,
  ourShare,
  formattedLYDbrokerAmount,
 });

// Watch for changes in isAmountChecked and ourSare
watch(
  [isAmountChecked, ourShare, acceptancePremium, acceptanceSumInsured],
  updateacceptancePremium
);
watch(
  [isAmountChecked, acceptancePremium, acceptanceSumInsured, rate],
  updateacceptancePremium2
);
watch(dialog, (val) => {
  if (!val) return;
  setTimeout(() => (dialog.value = false), 4000);
});
</script>
