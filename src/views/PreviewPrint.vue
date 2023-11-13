<template>
  <v-container
    class="d-print-block content"
    style="max-width: 1500px; text-align: center; margin-left: 150px"
  >
    <v-row>
      <v-col
        class="d-flex align-center justify-center"
        style="
          border: 2px solid black;
          max-width: 167px;
          max-height: 22px;
          margin-bottom: 5px;
          margin-right: 10px;
          background-color: #c0c0c0;
        "
      >
        <strong>Year </strong>
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
        <strong>{{$route.query.policyUSDrate}}</strong>
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
        <strong>{{$route.query.policyLYDrate}}</strong>
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
        <strong>{{$route.query.formattedTotalSumInsured}}</strong>
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
        <strong>{{$route.query.selectedCurrency}}</strong>
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
        <strong>{{$route.query.formattedPremium}}</strong>
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
        <strong>{{$route.query.selectedCurrency}}</strong>
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
        <strong>{{$route.query.formattedacceptanceSumInsured}}</strong>
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
        <strong>{{$route.query.selectedCurrency}}</strong>
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
        <strong>{{$route.query.formattedacceptancePremium}}</strong>
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
        <strong>{{$route.query.selectedCurrency}}</strong>
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
        <strong>{{$route.query.formattedUSDacceptanceSumInsured}}</strong>
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
        <strong>USD</strong>
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
        <strong>{{$route.query.formattedUSDacceptancepremium}}</strong>
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
        <strong>USD</strong>
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
        <strong>{{$route.query.formattedLYDacceptanceSumInsured}}</strong>
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
        <strong>{{$route.query.formattedLYDacceptancepremium}}</strong>
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
        <strong>{{$route.query.ourShare}} %</strong>
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
        <strong>Broker Commission</strong>
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
        <strong>{{$route.query.brokerRate}} %</strong>
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
        <strong>Broker Amount</strong>
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
        <strong>{{$route.query.formattedLYDbrokerAmount}}</strong>
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
          max-width: 167px;
          font-size: 14px;
          text-align: center;
          max-height: 22px;
          margin-top: 5px;
          background-color: #c0c0c0;
        "
      >
        <strong>Acceptance S/I USD</strong>
      </v-col>
      <v-col
        cols="4"
        class="d-flex align-center justify-center"
        style="
          border: 2px solid black;
          max-width: 167px;
          font-size: 14px;
          text-align: center;
          max-height: 22px;
          margin-top: 5px;
          margin-left: 3px;
          background-color: #c0c0c0;
        "
      >
        <strong>Acc/Premium USD</strong>
      </v-col>
      <v-col
        cols="4"
        class="d-flex align-center justify-center"
        style="
          border: 2px solid black;
          max-width: 167px;
          font-size: 14px;
          margin-left: 3px;
          text-align: center;
          max-height: 22px;
          margin-top: 5px;
          background-color: #c0c0c0;
        "
      >
        <strong>Broker Amount USD</strong>
      </v-col>
      <v-col
        cols="4"
        class="d-flex align-center justify-center"
        style="
          border: 2px solid black;
          max-width: 167px;
          font-size: 14px;
          margin-left: 3px;
          text-align: center;
          max-height: 22px;
          margin-top: 5px;
          background-color: #c0c0c0;
        "
      >
        <strong> Umbrella Re USD</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="4"
        class="d-flex align-center justify-center"
        style="
          border: 2px solid black;
          max-width: 167px;
          font-size: 14px;
          text-align: center;
          max-height: 22px;
          margin-top: 5px;
        "
      >
        <strong>{{$route.query.formattedUSDacceptanceSumInsured}}</strong>
      </v-col>
      <v-col
        cols="4"
        class="d-flex align-center justify-center"
        style="
          border: 2px solid black;
          max-width: 167px;
          font-size: 14px;
          text-align: center;
          max-height: 22px;
          margin-top: 5px;
          margin-left: 3px;
        "
      >
        <strong>{{$route.query.formattedUSDacceptancepremium}}</strong>
      </v-col>
      <v-col
        cols="4"
        class="d-flex align-center justify-center"
        style="
          border: 2px solid black;
          max-width: 167px;
          font-size: 14px;
          text-align: center;
          max-height: 22px;
          margin-top: 5px;
          margin-left: 3px;
        "
      >
        <strong>{{$route.query.formattedUSDbrokerAmount}}</strong>
      </v-col>
      <v-col
        cols="4"
        class="d-flex align-center justify-center"
        style="
          border: 2px solid black;
          max-width: 167px;
          font-size: 14px;
          text-align: center;
          max-height: 22px;
          margin-top: 5px;
          margin-left: 3px;
        "
      >
        <strong>{{$route.query.formattedUSDFACPremium}}</strong>
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
          margin-top: 7px;
          background-color: #c0c0c0;
        "
      >
        <strong>Reinsurance Terms Slip</strong>
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
        <strong>Insured</strong>
      </v-col>
      <v-col
        cols="8"
        class="d-flex align-center justify-center ml-1"
        style="
          border: 2px solid black;
          text-align: center;
          max-width: 474px;
          max-height: 22px;
          margin-bottom: 5px;
          background-color: white;
        "
      >
        <strong>{{}}</strong>
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
        <strong>Reinsurance</strong>
      </v-col>
      <v-col
        cols="8"
        class="d-flex align-center justify-center ml-1"
        style="
          border: 2px solid black;
          text-align: center;
          max-width: 474px;
          max-height: 22px;
          margin-bottom: 5px;
          background-color: white;
        "
      >
        <strong>{{}}</strong>
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
        <strong>Policy Type</strong>
      </v-col>
      <v-col
        cols="8"
        class="d-flex align-center justify-center ml-1"
        style="
          border: 2px solid black;
          text-align: center;
          max-width: 474px;
          max-height: 22px;
          margin-bottom: 5px;
          background-color: white;
        "
      >
        <strong>{{}}</strong>
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
        <strong>Location</strong>
      </v-col>
      <v-col
        cols="8"
        class="d-flex align-center justify-center ml-1"
        style="
          border: 2px solid black;
          text-align: center;
          max-width: 474px;
          max-height: 22px;
          margin-bottom: 5px;
          background-color: white;
        "
      >
        <strong>{{}}</strong>
      </v-col>
    </v-row>

    <!-- to add period
            here
          -->

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
        <strong>PPW</strong>
      </v-col>
      <v-col
        cols="8"
        class="d-flex align-center justify-center ml-1"
        style="
          border: 2px solid black;
          text-align: center;
          max-width: 474px;
          max-height: 22px;
          margin-bottom: 5px;
          background-color: white;
        "
      >
        <strong>{{}}</strong>
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
        <strong>Quarter</strong>
      </v-col>
      <v-col
        cols="8"
        class="d-flex align-center justify-center ml-1"
        style="
          border: 2px solid black;
          text-align: center;
          max-width: 474px;
          max-height: 22px;
          margin-bottom: 5px;
          background-color: white;
        "
      >
        <strong>{{}}</strong>
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
        <strong>Total Sum Insured</strong>
      </v-col>
      <v-col
        cols="8"
        class="d-flex align-center justify-center ml-1"
        style="
          border: 2px solid black;
          text-align: center;
          max-width: 474px;
          max-height: 22px;
          margin-bottom: 5px;
          background-color: white;
        "
      >
        <strong>{{$route.query.formattedTotalSumInsured}}</strong>
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
        <strong>Premium 100%</strong>
      </v-col>
      <v-col
        cols="8"
        class="d-flex align-center justify-center ml-1"
        style="
          border: 2px solid black;
          text-align: center;
          max-width: 474px;
          max-height: 22px;
          margin-bottom: 5px;
          background-color: white;
        "
      >
        <strong>{{$route.query.formattedPremium}}</strong>
      </v-col>
    </v-row>
    <v-row style="width: 810px">
      <v-col
        cols="10"
        style="
          border: 2px solid black;
          text-align: center;
          height: 100px;
          width: 100%;
          margin-bottom: 5px;
          background-color: white;
        "
      >
        <strong>{{}}</strong>
      </v-col>
    </v-row>
    <v-row>
      <div
        style="
          display: flex;
          justify-content: space-between;
          gap: 500px;
          margin-top: 10px;
          margin-bottom: 10px;
        "
      >
        <strong>Prepared By:</strong>
        <strong>CEO Approved</strong>
      </div>
    </v-row>
    <v-row>
      <div style="display: flex; justify-content: space-between; gap: 200px">
        <img
          src="../assets/Mohaned_Signture.png"
          alt="Image 1"
          style="width: 300px; height: 100px"
        />
        <img
          src="../assets/Osama.png"
          alt="Image 2"
          style="width: 300px; height: 100px"
        />
      </div>
    </v-row>
    <v-divider class="d-print-none"></v-divider>

    <div
      class="d-flex justify-center align-center d-print-none pt-1 pb-1"
      style="background-color: white"
    >
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
        class="text-white flex text-none ml-3"
        color="blue-darken-4"
        rounded="0"
        variant="flat"
        @click="printPage"
      >
        Print
      </v-btn>
    </div>
  </v-container>
</template>
<script setup>
import { ref, inject} from "vue";


const printPage = () => {
  print();


};
</script>
<style scoped>
@media print {
  .content {
    margin-left: 0px;
  }
}
</style>
