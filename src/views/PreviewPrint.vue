<template>
    <div style="
  display: flex;
  justify-content: center;
  height: 90vh; /* Set the height of the container to 100% of the viewport height */
">
    <v-container class="d-print-block" style="max-width: 800px;">

    <v-row>
      <v-col
      class="d-flex align-center justify-center"
        style="
          border: 2px solid black;
          max-width: 100px;
          max-height: 22px;
          margin-bottom: 5px;
          margin-right: 10px;
          background-color: #c0c0c0;
        "
      >
        <strong>Year</strong>
    </v-col>
    <strong>2023</strong>
    </v-row>
          <v-row>
            <v-col
            class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                max-width: 130px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>Ref</strong>
            </v-col>
          </v-row>

          <v-row>
            <v-col
            class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                text-align: center;
                max-height: 22px;
                max-width: 678px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>Exchange Rate</strong>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4"
              class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                max-width: 200px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>Rate For Policy Bank</strong>
            </v-col>
            <v-col
              cols="8"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                text-align: center;
                max-width: 335px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: white;
              "
            >
              <strong>{{ policyUSDrate }}</strong>
            </v-col>
            <v-col
              cols="4"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                max-width: 135px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>Rate</strong>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="4"
              class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                max-width: 200px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>Rate For Libyan Bank</strong>
            </v-col>
            <v-col
              cols="8"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                text-align: center;
                max-width: 335px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: white;
              "
            >
              <strong>{{ policyLYDrate }}</strong>
            </v-col>
            <v-col
              cols="4"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                max-width: 135px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>Rate</strong>
            </v-col>
          </v-row>

          <v-row>
            <v-col
            class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                text-align: center;
                max-width: 678px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>Currency Of Policy</strong>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4"
              class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                max-width: 200px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>TSI</strong>
            </v-col>
            <v-col
              cols="8"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                text-align: center;
                max-width: 335px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: white;
              "
            >
              <strong>{{ formattedTotalSumInsured }}</strong>
            </v-col>
            <v-col
              cols="4"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                max-width: 135px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>LYD</strong>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="4"
              class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                max-width: 200px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>Premium</strong>
            </v-col>
            <v-col
              cols="8"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                text-align: center;
                max-width: 335px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: white;
              "
            >
              <strong>{{ Preium }}</strong>
            </v-col>
            <v-col
              cols="4"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                max-width: 135px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>LYD</strong>
            </v-col>
          </v-row>


          <v-row>
            <v-col
            class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                text-align: center;
                max-width: 678px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>Acceptance Currency Of Policy</strong>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4"
              class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                max-width: 200px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>TSI</strong>
            </v-col>
            <v-col
              cols="8"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                text-align: center;
                max-width: 335px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: white;
              "
            >
              <strong>{{ acceptanceSumInsured }}</strong>
            </v-col>
            <v-col
              cols="4"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                max-width: 135px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>LYD</strong>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="4"
              class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                max-width: 200px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>Premium</strong>
            </v-col>
            <v-col
              cols="8"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                text-align: center;
                max-width: 335px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: white;
              "
            >
              <strong>{{ acceptancePremium }}</strong>
            </v-col>
            <v-col
              cols="4"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                max-width: 135px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>LYD</strong>
            </v-col>
          </v-row>


          <v-row>
            <v-col
            class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                text-align: center;
                max-width: 678px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>Acceptance Currency Of USD</strong>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4"
              class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                max-width: 200px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>TSI</strong>
            </v-col>
            <v-col
              cols="8"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                text-align: center;
                max-width: 335px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: white;
              "
            >
              <strong>{{ acceptanceUSDSumInsured }}</strong>
            </v-col>
            <v-col
              cols="4"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                max-width: 135px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>LYD</strong>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="4"
              class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                max-width: 200px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>Premium</strong>
            </v-col>
            <v-col
              cols="8"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                text-align: center;
                max-width: 335px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: white;
              "
            >
              <strong>{{ acceptanceUSDPremium }}</strong>
            </v-col>
            <v-col
              cols="4"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                max-width: 135px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>LYD</strong>
            </v-col>
          </v-row>



          <v-row>
            <v-col
            class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                text-align: center;
                max-width: 678px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>Acceptance Currency Of LYD</strong>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4"
              class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                max-width: 200px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>Capacity</strong>
            </v-col>
            <v-col
              cols="8"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                text-align: center;
                max-width: 335px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: white;
              "
            >
              <strong>{{  }}</strong>
            </v-col>
            <v-col
              cols="4"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                max-width: 135px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>LYD</strong>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4"
              class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                max-width: 200px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>TSI</strong>
            </v-col>
            <v-col
              cols="8"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                text-align: center;
                max-width: 335px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: white;
              "
            >
              <strong>{{ acceptanceLYDSumInsured }}</strong>
            </v-col>
            <v-col
              cols="4"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                max-width: 135px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>LYD</strong>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="4"
              class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                max-width: 200px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>Premium</strong>
            </v-col>
            <v-col
              cols="8"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                text-align: center;
                max-width: 335px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: white;
              "
            >
              <strong>{{ acceptanceLYDPremium }}</strong>
            </v-col>
            <v-col
              cols="4"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                max-width: 135px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>LYD</strong>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4"
              class="d-flex align-center justify-center"
              style="
                border: 2px solid black;
                max-width: 200px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>Our Share</strong>
            </v-col>
            <v-col
              cols="8"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                text-align: center;
                max-width: 335px;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: white;
              "
            >
              <strong>{{ ourShare }}%</strong>
            </v-col>
            <v-col
              cols="4"
              class="d-flex align-center justify-center ml-1"
              style="
                border: 2px solid black;
                max-width: 135px;
                text-align: center;
                max-height: 22px;
                margin-bottom: 5px;
                background-color: #c0c0c0;
              "
            >
              <strong>LYD</strong>
            </v-col>
          </v-row>

        </v-container>
    </div>

        <v-divider class="d-print-none"></v-divider>
        <v-card class="d-print-none mt-10">
        <v-card-actions class="justify-center px-6 py-3">
          <v-btn
          class="text-white flex text-none"
            color="blue-darken-4"
            rounded="0"
            variant="flat"
            @click="dialog = false"
          >
            Back
          </v-btn>

          <v-btn
            class="text-white flex text-none"
            color="blue-darken-4"
            rounded="0"
            variant="flat"
            @click="printPage"
          >
            Print
          </v-btn>
        </v-card-actions>
      </v-card>

  </template>
  <script setup>
    import {ref,inject } from 'vue';


  const dialog =ref (false);



  const formattedTotalSumInsured = inject('formattedTotalSumInsured')


  const printPage = () => {


              // Trigger the print
              print();

          }

  </script>

