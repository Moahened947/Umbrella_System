import { defineStore } from "pinia";

export const usePolicyStore = defineStore(
  'policy',{
  state: () => {
    return {
      policyList: [],
      totalCount: 0,
      pageSize: 15,
    totalSumInsured: 0,
    premium: 0,
    isAmount2Checked: false,
    rate: 0,
    acceptanceSumInsured: 0,
    acceptancePremium: 0,
    isAmountChecked: false,
    ourShare: 0,
    policyUSDrate: 1,
    policyLYDrate: 1,
    brokerRate: 0,
    AdditionalCoverName: [
      "Seepage, pollution and contamination exclusion clause",
      "Radioactive contamination exclusion clause",
      "Biological & chemical materials exclusion clause",
      "Nuclear, chemical & biological exclusion clause",
      "Cyber risks exclusion clause",
      "Political risks and political violence exclusion clause",
      "Asbestos exclusion clause",
      "Sanctions exclusion clause",
      "Condition concerning special warranties",
      "Hazardous Goods Storage Clause",
      "Property and Plant Testing and Commissioning Clause",
      "Fraudulent Claim Clause",
    ],

    covers: [
      "1 Strike, Riot and Civil Commotion",
      "2 Cross Liability",
      "3 Maintenance Visits",
      "4 Extended Maintenance",
      "5 Construction and/or erection time schedule",
      "6 Overtime, Night Work and Express Freight",
      "7 Airfreight",
      "8 Structures in Earthquake Zones",
      "9 Earthquake",
      "10 Exclusion of Flood and Inundation",
      "11 Serial Losses",
      "12 Exclusion of Windstorm",
      "13 Off-Site Storage",
      "100 Testing of machinery and installations",
      "101 Tunnels, galleries, temporary or permanent subsurface structures or installations",
      "102 Underground cables, pipes and other facilities",
      "103 Crops, forests and cultures",
      "104 Dams and water reservoirs",
      "106 Sections",
      "107 Camps and stores",
      "108 Construction plant",
      "109 Construction material",
      "110 equipment and machinery Safety measures with respect to precipitation, flood and inundation",
      "111 Removal of debris from landslides",
      "112 Fire-fighting facilities and fire safety on construction sites",
      "113 Inland transit",
      "114 Serial losses",
      "115 Designer's risk",
      "116 Contract works taken over or put into service",
      "117 Laying water supply and sewer pipes",
      "118 Drilling work for water wells",
      "119 Existing property",
      "120 Vibration, removal or weakening of support",
      "121 Piling foundation and retaining wall works",
      "200 Manufacturer's Risk",
      "201 Guarantee",
      "202 Construction/Erection Machinery",
      "203 Used Machinery",
      "204 Hydrocarbon Processing Industries 1",
      "205 Hydrocarbon Processing Industries 2",
      "206 Fire-Fighting Facilities",
      "207 Camps and Stores",
      "208 Underground Cables and Pipes",
      "209 Crops, Forests and Cultures",
      "211 Nuclear Fuel Elements",
      "212 Decontamination",
      "213 Reactor Pressure Vessel with Internals",
      "214 Subsidence",
      "217 Open Trenches during Laying of Pipelines, Ducts and Cables",
      "218 Leak Search Costs when Laying Pipelines",
      "219 Horizontal Directional Drilling of Pipeline Routes",
      "220 Inland Transit",
      "221 Safety Measures with Respect to Inundation",
      "222 Exclusion of Horizontal Directional Drilling",
      "301 Adjustment of Sum Insured and Premium",
      "302 Surrounding Property and Third Party Liability",
      "303 Flue Gas Explosions In Bollers and Furnacos",
      "311 Hull Risk-Transport Excluded",
      "312 Hull Risk-Transport Included",
      "313 Internal Fire, Internal Chemical Explosion and Direct Lightning",
      "314 Explosion In Internal Combustion Engines and Hydrogen-Cooled Generators",
      "315 Loakages from Tanks/Vessels",
      "316 Inundation and Silting Up",
      "317 Underground Machinery and Equipment",
      "318 Submerged and Deep-Well Pumps",
      "319 Refractory Materials and/or Masonry In Industrial Furnaces Bollers",
      "320 Lubricating Oil or Refrigerant",
      "321 Conveyor Belts and Chains",
      "322 Wires and Non-Electric Cables",
      "323 Floodlight Bulbs",
      "331 Rewinding of Electric Machines",
      "332 Combustion Engines",
      "333 Gas Turbines",
      "342 Platen Presses",
      "343 Electric Motors",
      "344 Steam, Water and Gas Turbines and Turbo-Generator Sets",
      "345 Boilers",
      "351 Decontamination",
      "352 Reactor Pressure Vessel with Internals",
      "353 Nuclear Fuel Elements",
      "391 Maintenance work on Electronic Components of the Insured Machinery",
      "400 Underground Machinery and Equipment",
      "401 Inland Transit",
      "410 Adjustment of Sum Insured and Premium",
      "420 Oil, Gas and/or Geothermal Drilling Rigs and Equipment",
      "421 Water Well Drilling Rigs and Equipment",
      "502 Valves and Tubes",
      "503 Theft",
      "504 Mobile and Portable Equipment",
      "505 Earthquake",
      "506 Hurricane, Cyclone and Typhoon",
      "507 Full Replacement Value",
      "508 Full Replacement Value  Fire and Allied Perils ",
      "510 Loss of Rental for Leased EDP Equipment",
      "511 Cover for Additional Expenditure Incurred Only Once for Reprogramming and Transport",
      "512 Cover for Additional Expenditure for the Restoration of EDP Systems",
      "531 Fire, Lightning, Explosion and Impact of Aircraft",
      "532 Mechanical and Electrical Breakdown",
      "533 Flood, Inundation, Storm or Tempest",
      "534 Air-Conditioning",
      "535 Scaffolding and Ladders",
      "536 Masonry Work",
      "537 Computer Tomographs",
      "538 Lightning and Overvoltage Protection Devices",
      "561 X-Ray Films",
      "562 Waiver of Subrogation",
      "563 Obsolete Equipment",
      "564 Delay in Repair",
      "565 EDP Equipment Insured in Connection with a Hire or Lease Contract",
      "567 Adjustment of Sum Insured and Premium",
      "591 Maintenance Agreement",
      "592 Maintenance Contract Services and Insurance Cover",
      "811 Hull Risk-for Mobile Equipment on Premises only",
      "812 Hull Risk - for Mobile Equipment including Inland Transit",
      "813 Internal Fire, Internal Chemical Explosion and Direct Lightning",
      "817 Underground Machinery and Equipment",
      "829 Machinery Breakdown during Guarantee Period",
      "831 Inundation and Silting Up",
      "832 Flue Gas Explosions in Boilers and Furnaces",
      "842 Non-Destructive Testing  NDT  of Presses; Shears and Similar Items with Highly Stressed Frames or Other Components",
      "843 Electric Motors and Generators",
      "844 Steam, Water and Gas Turbines and Turbo-Generator Sets",
      "845 Boilers",
      "855 Radioactive Isotopes in Instruments",
      "856 Deterioration",
      "857 Prolongation of the Interruption Period due to Deterioration",
      "861 Increased Cost of Electricity, Water, Gas or Steam Supply",
      "862 Maximum Demand Charges",
      "863 Additional Expenditure Other than Increased Cost of Working",
      "866 Failure of Public Electricity, Water, Gas or Steam Supply",
      "891 Delay in Repair",
      "892 Indemnity Period Limits Exceeding 12 Months",
      "893 Proportional Time Excess",
      "894 Sum Insured on Unit Price Basis",
    ],

    FireClassBusiness: [
      "Fire",
      "Fire Conjunction with Burglary",
      "Fire and TPL",
      "Fire and Allied Perils",
      "Fire householders or house owners",
      "Property All Risks policies including Machinery Breakdown",
      "Loss of Profits",
      "Fire and Loss of Profits",
      "Property All Risks Loss of Profits",
      "Fire and BI",
      "Property All Risks and BI",
    ],
    EngClassBusiness: [
      "Contractors’ All Risks  CAR  including associated TPL",
      "Erection All Risks  EAR  including associated TPL",
      "Contractor’s Plant and Machinery  CPM ",
      "Contractor’s Plant and Equipment  CPE ",
      "Machinery Breakdown  MB ",
      "Boiler & Pressure Vessel Explosion  BPVE ",
      "Deterioration of Stock  DOS  following Machinery Breakdown",
      "Loss of Profits written in conjunction with and following MB or BPVE  LOP ",
      "Electronic Equipment  EE ",
      "Comprehensive project  CP ",
      "Business Interruption",
    ],
    GaClassBusiness: [
      "Burglary",
      "Cash in Safe",
      "Cash in Transit",
      "Personal Accident",
      "Plate Glass",
      "Fidelity Guarantee",
      "Bonds",
    ],

    MarineCargoClassBusiness: [
      "Clauses (A)",
      "Clauses (B)",
      "Clauses (C)",
      "Open Cover",
    ],
    MarineHullClassBusiness: [
      "Clauses (A)",
      "Clauses (B)",
      "Clauses (C)",
      "Open Cover",
    ],
    TSIFire: [
      "Building",
      "Machinery and equipment",
      "Raw Materials, Final Product",
      "Stores",
      "Furniture and equipment",
      "Business Interruption",
      "Third Party liability",
    ],
    TSIGa: ["other"],
    TSIEngineering: [
      "Contract Works",
      "Construction Plant and Equipment",
      "Construction Machinery according to attached list",
      "Existing Property",
      "Camp Temporary & buildings",
    ],
    TSIMarineCargo: ["As per Commercial Invoice"],
    TSIMarineHull: ["Ship Body", "Ship Machinery", "Ship Equipments"],
  }

},
  getters: {
    calculatedPremium() {
      if (this.isAmount2Checked) {
        return this.premium / this.totalSumInsured;
      } else {
        return this.totalSumInsured * (this.rate / 100);
      }
    },

    calculatedacceptancePremium() {
      if (this.isAmountChecked) {
        return this.acceptancePremium / this.premium;
      } else {
        // Choose one operation here, either the first or the second, not both
        return (this.ourShare / 100) * this.totalSumInsured; // or this.ourShare * this.premium;
      }
    },
    calculatedacceptancePremium2() {
      if (this.isAmountChecked) {
        return (this.ourShare / 100) * this.totalSumInsured;
      }
    },
  },
  actions: {
    updatePremium() {
      if (!this.isAmount2Checked) {
        this.premium = this.totalSumInsured * (this.rate / 100);
      } else {
        this.rate = this.premium / this.totalSumInsured;
      }
    },

    updateacceptancePremium() {
      if (!this.isAmountChecked) {
        // Choose one operation here, either the first or the second, not both
        this.acceptanceSumInsured =
          (this.ourShare / 100) * this.totalSumInsured; // or this.acceptancePremium = this.ourShare * this.premium;
      } else {
        this.ourShare = this.acceptancePremium / this.acceptanceSumInsured;
      }
    },
    updateacceptancePremium2() {
      if (this.isAmountChecked) {
        // Choose one operation here, either the first or the second, not both
        this.acceptancePremium = this.acceptanceSumInsured * (this.rate / 100); // or this.acceptancePremium = this.ourShare * this.premium;
      }
    },


  },
});
