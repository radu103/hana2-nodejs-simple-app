## hana2-nodejs-simple-app description

Version testeed : SAP HANA Express 2.0 SPS03 from [here](https://www.sap.com/developer/topics/sap-hana-express.html)

Modules : 
- hdi_container (database module) 
- nodejs module
- no uua module yet

Based on the example provided by SAP [here](https://github.com/SAP/hana-shine-xsa/tree/shine-cf)

## How to run

- After you install the SAP Hana Express 2.0 virtual appliance your WEB IDE should be here [https://hxehost:53075/](https://hxehost:53075/).
(Accept the certificate exception if prompted for security issues)

- After starting up the virtual machine it takes some time until all Hana services/apps start

- Import the content of this repository in SAP HANA WEB IDE to a new Multi Target Application.

- Build the modules

- Run the services module and open it's generated url