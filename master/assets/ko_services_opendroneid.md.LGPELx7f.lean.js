import{_ as t}from"./chunks/conceptual_overview.C95SLDpR.js";import{_ as a,c as o,a8 as r,o as n}from"./chunks/framework.CnRC9NRC.js";const u=JSON.parse('{"title":"Open Drone ID","description":"","frontmatter":{},"headers":[],"relativePath":"ko/services/opendroneid.md","filePath":"ko/services/opendroneid.md"}'),i={name:"ko/services/opendroneid.md"};function s(d,e,h,l,m,c){return n(),o("div",null,e[0]||(e[0]=[r('<h1 id="open-drone-id" tabindex="-1">Open Drone ID <a class="header-anchor" href="#open-drone-id" aria-label="Permalink to &quot;Open Drone ID&quot;">​</a></h1><p>Direct Remote Identification (DRI) or Remote ID (RID) is/will be a mandatory technology for Unmanned Aircraft (UA) in Japan, the United States of America and the European Union. <a href="https://github.com/opendroneid/opendroneid-core-c#comparison" target="_blank" rel="noreferrer">Data</a> such as the UA real-time location/altitude, UA serial number, operator ID/location etc. are broadcast via either Wi-Fi or Bluetooth from the UA. <a href="https://github.com/opendroneid/opendroneid-core-c" target="_blank" rel="noreferrer">Open Drone ID</a> is an open source implementation of RID.</p><p>The terms Remote ID and drone ID are used interchangeably in the text below.</p><h2 id="specifications" tabindex="-1">Relevant specifications <a class="header-anchor" href="#specifications" aria-label="Permalink to &quot;Relevant specifications {#specifications}&quot;">​</a></h2><p>The MAVLink messages defined for usage with Open Drone ID are compliant with the following standards:</p><ul><li>ASTM F3411 Specification for Remote ID and Tracking</li><li>ASD-STAN prEN 4709-002 Direct Remote Identification</li></ul><p>For additional details, please see <a href="https://github.com/opendroneid/opendroneid-core-c#relevant-specifications" target="_blank" rel="noreferrer">here</a>. In general, the front page of the <a href="https://github.com/opendroneid/opendroneid-core-c" target="_blank" rel="noreferrer">opendroneid core-c</a> repository has lots of pointers to additional information and SW projects related to drone ID.</p><h2 id="broadcast_methods" tabindex="-1">Broadcast methods and impact on the message design <a class="header-anchor" href="#broadcast_methods" aria-label="Permalink to &quot;Broadcast methods and impact on the message design {#broadcast_methods}&quot;">​</a></h2><p>Four different broadcast methods are defined:</p><ul><li>Bluetooth Legacy Advertising (Bluetooth 4.x)</li><li>Bluetooth Long Range with Extended Advertising (Bluetooth 5.x)</li><li>Wi-Fi Neighbor-aware Network (Wi-Fi NaN)</li><li>Wi-Fi Beacon (vendor specific information element in the SSID beacon frame)</li></ul><p>The broadcast method used with Bluetooth Legacy Advertising signals impose a strict size limitation on the amount of data that can be transmitted in each radio burst. Therefore the relevant data is divided into different categories and each category is transmitted via its own message.</p><p>The standards defines 6 such messages and an additional 7th message type for packing multiple messages together into a message pack (used when transmitting on Wi-Fi NaN, Wi-Fi Beacon or Bluetooth Long Range with Extended Advertising). To support easy data transfers to/from a Remote ID (RID) transmitter/receiver component, MAVLink messages supporting all the fields of the drone ID messages have been made available. See <a href="#messages">Messages</a> below.</p><h2 id="use_cases" tabindex="-1">Use case examples <a class="header-anchor" href="#use_cases" aria-label="Permalink to &quot;Use case examples {#use_cases}&quot;">​</a></h2><p>There are multiple possible use cases for the MAVLink drone ID messages:</p><ul><li>A flight controller sends ID, location etc. data to an onboard Bluetooth/Wi-Fi RID transmitter component.</li><li>An onboard Bluetooth/Wi-Fi receiver picks up drone ID messages from surrounding aircraft, relays this information using MAVLink drone ID messages to the flight controller, which then uses the information e.g. for Detect And Avoid (DAA) calculations.</li><li>A drone sends MAVLink drone ID messages via its control link to the Ground Control Station (GCS). The GCS is connected via the Internet to a Remote ID server, which stores and publishes the drone&#39;s ID, location etc.</li><li>As above but in the other direction for DAA calculations.</li><li>A Remote ID Display application (RID) on the GCS listens to all drone ID data received from surrounding UAs and displays their position to the operator.</li></ul><h2 id="messages" tabindex="-1">Messages <a class="header-anchor" href="#messages" aria-label="Permalink to &quot;Messages {#messages}&quot;">​</a></h2><p>The ASTM, ASD-STAN and MAVLink messages are listed below.</p><table tabindex="0"><thead><tr><th>ASTM</th><th>ASD-STAN</th><th>MAVLink</th><th>Purpose</th></tr></thead><tbody><tr><td><a id="OPEN_DRONE_ID_BASIC_ID"></a>Basic ID</td><td>Basic ID</td><td><a href="./../messages/common.html#OPEN_DRONE_ID_BASIC_ID">OPEN_DRONE_ID_BASIC_ID</a></td><td>Provides an ID for the UA, characterizes the type of ID and identifies the type of UA.</td></tr><tr><td><a id="OPEN_DRONE_ID_LOCATION"></a>Location</td><td>Location</td><td><a href="./../messages/common.html#OPEN_DRONE_ID_LOCATION">OPEN_DRONE_ID_LOCATION</a></td><td>Provides location, altitude, direction, and speed of the UA.</td></tr><tr><td><a id="OPEN_DRONE_ID_AUTHENTICATION"></a>Authentication</td><td>Not specified (reserved)</td><td><a href="./../messages/common.html#OPEN_DRONE_ID_AUTHENTICATION">OPEN_DRONE_ID_AUTHENTICATION</a></td><td>Provides authentication data for the UA.</td></tr><tr><td><a id="OPEN_DRONE_ID_SELF_ID"></a>Self-ID</td><td>Self-ID</td><td><a href="./../messages/common.html#OPEN_DRONE_ID_SELF_ID">OPEN_DRONE_ID_SELF_ID</a></td><td>Optional plain text message that can be used by operators to identify themselves and the purpose of an operation. Can also be used to provide optional additional clarification in an emergency/remote ID system failure situation.</td></tr><tr><td><a id="OPEN_DRONE_ID_SYSTEM"></a>System</td><td>System</td><td><a href="./../messages/common.html#OPEN_DRONE_ID_SYSTEM">OPEN_DRONE_ID_SYSTEM</a></td><td>Includes the operator location/altitude, multiple aircraft information (group/swarm, if applicable), full timestamp and possible category/class information.</td></tr><tr><td><a id="OPEN_DRONE_ID_OPERATOR_ID"></a>Operator ID</td><td>Operator ID</td><td><a href="./../messages/common.html#OPEN_DRONE_ID_OPERATOR_ID">OPEN_DRONE_ID_OPERATOR_ID</a></td><td>Provides the operator ID.</td></tr><tr><td><a id="OPEN_DRONE_ID_MESSAGE_PACK"></a>Message Pack</td><td>Message Pack</td><td><a href="./../messages/common.html#OPEN_DRONE_ID_MESSAGE_PACK">OPEN_DRONE_ID_MESSAGE_PACK</a></td><td>A payload mechanism for combining the messages above into a single message pack. Used with Bluetooth Extended Advertising, Wi-Fi NaN and Wi-Fi Beacon.</td></tr><tr><td>_</td><td>_</td><td><a href="./../messages/common.html#OPEN_DRONE_ID_ARM_STATUS">OPEN_DRONE_ID_ARM_STATUS</a></td><td>Sent by RID transmitter/receiver components to indicate that the RID system is &quot;ready to use&quot;. This should be used as an arming condition for the flight stack. Note that this differs from the <a href="#heartbeat">HEARTBEAT</a> which indicates that the component is &quot;alive&quot; but not necessarily ready to use.</td></tr><tr><td>_</td><td>_</td><td><a href="./../messages/common.html#OPEN_DRONE_ID_SYSTEM_UPDATE">OPEN_DRONE_ID_SYSTEM_UPDATE</a></td><td>A subset of the <a href="#OPEN_DRONE_ID_SYSTEM">OPEN_DRONE_ID_SYSTEM</a> message, containing only the fields that must be updated at a high rate. Typically sent from the GCS to provide data to the RID transmitter component. If both <code>OPEN_DRONE_ID_SYSTEM</code> and <code>OPEN_DRONE_ID_SYSTEM_UPDATE</code> are used, the more efficient <code>OPEN_DRONE_ID_SYSTEM_UPDATE</code> will be used at a high rate and the full <code>OPEN_DRONE_ID_SYSTEM</code> at a low rate, to reduce the traffic on the control link.</td></tr></tbody></table><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>The raw byte layout of the MAVLink messages is not exactly the same as what a RID Bluetooth/Wi-Fi transmitter component will broadcast over the air. Slight compression is applied. Example code for this conversion can be found in the project: <a href="https://github.com/opendroneid/opendroneid-core-c" target="_blank" rel="noreferrer">Open Drone ID Core C Library</a>.</p></div><p>The <a href="https://github.com/opendroneid/opendroneid-core-c" target="_blank" rel="noreferrer">Open Drone ID Core C Library</a> contains code for decoding the MAVLink messages and &quot;compressing&quot; the data into data structures for broadcast over Bluetooth or Wi-Fi (or vice-versa for reception).</p><p>The standards do not impose any requirements for a drone to be capable of receiving drone ID messages, nor any requirements for reacting to their content (requirements from local legislation might be different).</p><p>An example Android receiver implementation for Bluetooth/Wi-Fi drone ID is <a href="https://play.google.com/store/apps/details?id=org.opendroneid.android_osm" target="_blank" rel="noreferrer">available here</a> (<a href="https://github.com/opendroneid/receiver-android" target="_blank" rel="noreferrer">source codes</a>).</p><p>Code related to (Internet) Network Remote ID can be found in the <a href="https://github.com/interuss" target="_blank" rel="noreferrer">InterUSS Project</a> and <a href="https://github.com/uastech/standards" target="_blank" rel="noreferrer">https://github.com/uastech/standards</a> (Unofficial reference for UAS-related APIs).</p><h2 id="update_rates" tabindex="-1">Message update rates <a class="header-anchor" href="#update_rates" aria-label="Permalink to &quot;Message update rates {#update_rates}&quot;">​</a></h2><p>ASTM F3411 and ASD-STAN prEN 4709-002 (and possibly other <a href="#specifications">standards</a>) require that the <a href="#OPEN_DRONE_ID_LOCATION">LOCATION</a> message is broadcast/published from the RID transmitter component at least once per second. The rest of the messages must be broadcast/published once per 3 seconds (the rules in some regions have tightened this requirement to 1 second for also the <a href="#OPEN_DRONE_ID_BASIC_ID">BASIC ID</a> and the <a href="#OPEN_DRONE_ID_SYSTEM">SYSTEM</a> message. Please see <a href="https://github.com/opendroneid/opendroneid-core-c#comparison" target="_blank" rel="noreferrer">here</a>).</p><p>Not all message types or fields within a message type are mandatory to broadcast/publish. The mandatory message set vary from region to region. Please see the <a href="https://github.com/opendroneid/opendroneid-core-c#comparison" target="_blank" rel="noreferrer">summary</a>.</p><p>The standards require that the data contained in the <a href="#OPEN_DRONE_ID_LOCATION">LOCATION</a> and the <a href="#OPEN_DRONE_ID_SYSTEM">SYSTEM</a> messages (on the air/internet) is not older than 1 second (the location data, timestamps etc.).</p><p>To be compliant in different regions and receive certification acceptance, the UAS as a complete entity must obey the above timing restrictions. Although popular autopilot SW stacks will be verified to be capable of this, the compliance testing will have been done using a certain set of HW/SW components. Any deviation from this set, will require the integrator of the UAS to consider the combination of the above requirements when deciding the internal update rates for each component, in the MAVLink network, generating data for the RID transmitter component.</p><p>It must be expected that there will be some delays from e.g. the GCS sending a <a href="#OPEN_DRONE_ID_SYSTEM">SYSTEM</a> message via the flight controller to the RID transmitter component. The RID transmitter component will gather this data plus data from other messages together and generate the final message data set, which is broadcast over the air. Each of these components will be running on their own update and forward/relay cycle and can thus introduce delays. I.e. running everything at exactly one second cycles, probably will lead to violations of the data &quot;freshness&quot; requirement. But going to the other extreme of forcing all messages to be at 10+ Hz would likely lead to unnecessary airwave noise on the (Command and Control) C2 link/Wi-Fi/Bluetooth spectrum. Components are expected to tune refresh rates to ensure compliance, without saturating internal communication links.</p><p>RID broadcasting using Bluetooth 4 Legacy Advertising introduces additional complexity to this. For Bluetooth 5 or Wi-Fi Beacon/NaN, all messages are packed together and broadcast in a single advertisement by the RID transmitter component. Bluetooth 4 advertisements can only contain 25 bytes and thus can fit only a single message. Since typically at least three messages must be broadcast on the air per second, the BT4 RID transmitter component must advertise at least every 333 ms.</p><h2 id="routing" tabindex="-1">Routing drone ID MAVLink messages inside the UAS <a class="header-anchor" href="#routing" aria-label="Permalink to &quot;Routing drone ID MAVLink messages inside the UAS {#routing}&quot;">​</a></h2><p>There can be multiple MAVLink components in an UAS involved in the handling of drone ID data. An example is shown in the figure below. Certainly not all UAS will contain all of these components and the placement of some of them can be different from one system to another.</p><p><img src="'+t+'" alt="drone ID conceptual overview"></p><p>All senders of MAVLink drone ID messages must fill the <code>sysid</code> <a href="https://github.com/ArduPilot/pymavlink/blob/master/generator/C/include_v2.0/mavlink_types.h#L115" target="_blank" rel="noreferrer">field</a> with the MAVLink system ID value that the MAVLink sender component belongs to and fill the <code>compid</code> <a href="https://github.com/ArduPilot/pymavlink/blob/master/generator/C/include_v2.0/mavlink_types.h#L116" target="_blank" rel="noreferrer">field</a> with the MAVLink component ID value of the sender.</p><p>The MAVLink components or systems that will typically generate drone ID MAVLink messages are listed in the table below:</p><table tabindex="0"><thead><tr><th>Component/System</th><th>Description</th></tr></thead><tbody><tr><td><a href="./../messages/common.html#MAV_COMP_ID_AUTOPILOT1">MAV_COMP_ID_AUTOPILOT1</a></td><td>The flight controller/autopilot. Knows the ID of the UA, the current location, altitude, speed etc.</td></tr><tr><td>Ground Control Station</td><td>GCS with a human user interface for inputting the operator ID, text description of the flight purpose, method for obtaining the operator location etc.</td></tr><tr><td><a href="./../messages/common.html#MAV_COMP_ID_ODID_TXRX_1">MAV_COMP_ID_ODID_TXRX_1</a></td><td>A Remote ID transmitter/receiver component (Bluetooth/Wi-Fi/Internet).</td></tr><tr><td><a href="./../messages/common.html#MAV_COMP_ID_ODID_TXRX_2">MAV_COMP_ID_ODID_TXRX_2</a></td><td>A Remote ID transmitter/receiver component (Bluetooth/Wi-Fi/Internet).</td></tr><tr><td><a href="./../messages/common.html#MAV_COMP_ID_ODID_TXRX_3">MAV_COMP_ID_ODID_TXRX_3</a></td><td>A Remote ID transmitter/receiver component (Bluetooth/Wi-Fi/Internet).</td></tr></tbody></table><p>The autopilot/flight controller is typically the component that knows about the data needed for the <a href="#OPEN_DRONE_ID_BASIC_ID">BASIC ID</a> and the <a href="#OPEN_DRONE_ID_LOCATION">LOCATION</a> messages. It must stream MAVLink messages with this information to the RID transmitter component.</p><p>The Ground Control Station system is the interface for the operator of the UAS. The operator must enter the data needed for the <a href="#OPEN_DRONE_ID_SELF_ID">SELF_ID</a>, the <a href="#OPEN_DRONE_ID_SYSTEM">SYSTEM</a> and the <a href="#OPEN_DRONE_ID_OPERATOR_ID">OPERATOR_ID</a>, messages before the flight. The GCS must send this data via MAVLink messages to the RID transmitter component (possibly via the autopilot component). If the GCS is capable of regularly obtaining its own location, these updates are sent in the <a href="#OPEN_DRONE_ID_SYSTEM">SYSTEM</a> message together with a full timestamp.</p><p>The UAS has one or more RID transmitter components for publishing the drone ID data to the rest of the world, either via Bluetooth or Wi-Fi broadcasts, or via an internet connection to an internet Remote ID server. The RID transmitter components will listen to the MAVLink messages from the flight controller and the GCS but must ignore MAVLink messages where the <code>compid</code> <a href="https://github.com/ArduPilot/pymavlink/blob/master/generator/C/include_v2.0/mavlink_types.h#L116" target="_blank" rel="noreferrer">field</a> is set to <a href="./../messages/common.html#MAV_COMP_ID_ODID_TXRX_1">MAV_COMP_ID_ODID_TXRX_1</a>, <a href="./../messages/common.html#MAV_COMP_ID_ODID_TXRX_2">MAV_COMP_ID_ODID_TXRX_2</a> or <a href="./../messages/common.html#MAV_COMP_ID_ODID_TXRX_3">MAV_COMP_ID_ODID_TXRX_3</a> (those MAVLink messages would have originated from a RID receiver component and would be the drone ID information from <a href="./other_ua.html">other UAs</a>). The method for the RID transmitter components to identify MAVLink messages from the GCS, is described in the <a href="#heartbeat">Heartbeat</a> section below.</p><p>The MAVLink components in the UAS involved in the drone ID MAVLink message exchange, must keep track of the <code>HEARTBEAT</code> MAVLink messages from the other MAVLink components. If the <code>HEARTBEAT</code> messages are not received within a required time interval, they must declare a malfunction of the Remote ID system and indicate this in the <code>status</code> field of the <a href="#OPEN_DRONE_ID_LOCATION">LOCATION</a> message. This must also be indicated to the operator of the UAS.</p><p>Similarly, the autopilot must listen to the <a href="#OPEN_DRONE_ID_ARM_STATUS">ARM_STATUS</a> from the RID transmitter component(s) and not allow the UA to be airborne before the RID transmitter component(s) is ready. During flight, if the arm status indicates a failure, similar action must be taken as for a lack of <code>HEARTBEAT</code> messages from the RemoteID. The <a href="#OPEN_DRONE_ID_ARM_STATUS">ARM_STATUS</a> message must also be routed to a GCS, if present, allowing it to provide more detailed information about RemoteID arming failures.</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>In addition to the above, there are multiple additional different scenarios that must result in the Location status field being set to Emergency or Remote ID System Failure. The exact strategy on how to avoid having multiple MAVLink components overwriting each-others emergency declarations is not yet fully defined. Some preliminary discussion can be found <a href="https://github.com/ArduPilot/ArduRemoteID/issues/34" target="_blank" rel="noreferrer">here</a>.</p></div><p>Optionally, further restrictions on which RID transmitter/receiver component must process a MAVLink message can be enforced if the sender fills the <code>target_system</code> and <code>target_component</code> fields of the MAVLink message. RID transmitter/receiver components must only listen to MAVLink messages that have these fields set to either zero (broadcast) or the component&#39;s own MAVLink system ID and component ID. This can be useful if e.g. there are two UA connected to a single GCS. The GCS can then direct information to specific MAV_COMP_ID_ODID_TXRX_x components on a specific UA. By default, all senders of drone ID MAVLink messages must fill the <code>target_system</code> and <code>target_component</code> fields with zero, to indicate a broadcast to all MAVLink components.</p><h3 id="other_ua" tabindex="-1">Open Drone ID data from other UA(s) <a class="header-anchor" href="#other_ua" aria-label="Permalink to &quot;Open Drone ID data from other UA(s) {#other_ua}&quot;">​</a></h3><p>It is possible that the RID transmitter components also work as receivers, for obtaining drone ID data from surrounding UAs. When publishing the received drone ID data as internal MAVLink messages, they must set the <code>compid</code> <a href="https://github.com/ArduPilot/pymavlink/blob/master/generator/C/include_v2.0/mavlink_types.h#L116" target="_blank" rel="noreferrer">field</a> to their own MAV_COMP_ID_ODID_TXRX_n ID to make it possible to distinguish this data from the drone ID data of the UA itself. Also the <code>systemid</code> <a href="https://github.com/ArduPilot/pymavlink/blob/master/generator/C/include_v2.0/mavlink_types.h#L115" target="_blank" rel="noreferrer">field</a> must be set with the MAVLink system ID value that the RID receiver component belongs to.</p><p>At least two possible consumers of drone ID data from surrounding aircraft are possible:</p><ul><li>A Detect And Avoid (DAA) system that tracks the current and estimated future positions of other UAs and takes that into account when setting the flight path of the UA itself.</li><li>A Remote ID Display (RID) application that visually shows the surrounding UA&#39;s locations (and possibly past and estimated future flight paths) to the operator of the UA, in order for him/her to utilize this information when controlling the UA.</li></ul><p>See <a href="#combining">below</a> on how to combine remote ID data from other UAs.</p><h3 id="heartbeat" tabindex="-1">Heartbeat <a class="header-anchor" href="#heartbeat" aria-label="Permalink to &quot;Heartbeat {#heartbeat}&quot;">​</a></h3><p>Each component involved in the MAVLink message exchange, is required to regularly send out MAVLink <a href="./../messages/common.html#HEARTBEAT">HEARTBEAT</a> messages in order to facilitate discovery and monitoring of the component in the UAS. Please see further details in the <a href="./heartbeat.html">HEARTBEAT</a> documentation.</p><p>For RID transmitter/receiver components (with <code>compid</code>s <a href="./../messages/common.html#MAV_COMP_ID_ODID_TXRX_1">MAV_COMP_ID_ODID_TXRX_1</a>, <a href="./../messages/common.html#MAV_COMP_ID_ODID_TXRX_2">MAV_COMP_ID_ODID_TXRX_2</a> or <a href="./../messages/common.html#MAV_COMP_ID_ODID_TXRX_3">MAV_COMP_ID_ODID_TXRX_3</a>), the <code>type</code> field in the <a href="./../messages/common.html#HEARTBEAT">HEARTBEAT</a> message must be filled with <a href="./../messages/common.html#MAV_TYPE_ODID">MAV_TYPE_ODID</a>.</p><p>The MAVLink <a href="./../messages/common.html#HEARTBEAT">HEARTBEAT</a> message serves as the way for RID transmitter/receiver components to identify the <code>sysid</code> of the GCS. The GCS will send out MAVLink <a href="./../messages/common.html#HEARTBEAT">HEARTBEAT</a> messages with its <code>sysid</code> <a href="https://github.com/ArduPilot/pymavlink/blob/master/generator/C/include_v2.0/mavlink_types.h#L115" target="_blank" rel="noreferrer">field</a> set to the GCS&#39;s MAVLink system ID and the <code>type</code> set to <a href="./../messages/common.html#MAV_TYPE_GCS">MAV_TYPE_GCS</a>. The RID transmitter/receiver components must interpret all MAVLink Open Drone ID messages from that system ID, as coming from the GCS. There is no dedicated MAVLink component ID for GCSs, hence the MAVLink system ID must be used instead for identifying the GCS.</p><h2 id="improvements" tabindex="-1">Possible future improvements <a class="header-anchor" href="#improvements" aria-label="Permalink to &quot;Possible future improvements {#improvements}&quot;">​</a></h2><p>The current set of MAVLink drone ID messages do not provide any means for controlling some of the RID transmitter/receiver component details. The RID transmitter/receiver component must be hard-coded by the manufacturer to a certain configuration. Some discussion and proposal for this type of messages can be found <a href="https://github.com/mavlink/mavlink/pull/1865" target="_blank" rel="noreferrer">here</a>. It would be useful to control e.g. the following items:</p><ul><li>Starting/stopping broadcast</li><li>Configure the broadcast method (BT4, BT5, Beacon, NaN)</li><li>Wi-Fi channel configuration for Beacon</li><li>Message update rates on the air</li></ul><p>No regions currently require drone ID publication via the internet (Network Remote ID). However, it is possible that in the future this will change from being optional to mandatory for some use cases/regions as a part of the <a href="https://www.faa.gov/uas/research_development/traffic_management" target="_blank" rel="noreferrer">UTM</a>/<a href="https://www.easa.europa.eu/what-u-space" target="_blank" rel="noreferrer">USpace</a> efforts. Currently there are no suitable MAVLink messages defined to configure a Network Remote ID transceiver. Messages to specify the server(s) to connect to, credentials etc. would be needed.</p><p>Security of drone ID data is partly under definition. The Japan rule requires a signature of the drone ID data to be broadcasted in the <a href="#OPEN_DRONE_ID_AUTHENTICATION">AUTHENTICATION</a> message. The details are in <a href="https://github.com/opendroneid/opendroneid-core-c#japan" target="_blank" rel="noreferrer">Japanese</a>. No such requirement currently exists for the US and EU. It is possible that some use cases in the future might require more security related activities for drone ID data. Some additional protocol specification work is being drafted by the IETF in the <a href="https://github.com/ietf-wg-drip" target="_blank" rel="noreferrer">DRIP</a> working group.</p><h2 id="multiple_transceivers" tabindex="-1">UAS with multiple RID transmitters and/or receiver components <a class="header-anchor" href="#multiple_transceivers" aria-label="Permalink to &quot;UAS with multiple RID transmitters and/or receiver components {#multiple_transceivers}&quot;">​</a></h2><p>Since three different technologies for broadcasting/publishing drone ID data have been defined (Bluetooth, Wi-Fi and internet), it is quite possible for a UAS to support more than just a single type.</p><p>For UASs that desire to listen to other UA&#39;s information, it would be desirable to include receivers for all three methods, in order to maximize the possibility of detecting all other surrounding UAs.</p><h2 id="combining" tabindex="-1">Combining data from other UAs when receiving drone ID data <a class="header-anchor" href="#combining" aria-label="Permalink to &quot;Combining data from other UAs when receiving drone ID data {#combining}&quot;">​</a></h2><p>For Drone ID data that is received from other UAs, the data of the message itself does not always identify exactly which UA the data originated from. E.g. for data received via Bluetooth Legacy Advertising (Bluetooth 4.x), many of the received messages will not contain the unique serial number/ID of the UA that broadcasted the data, due to the severe size limitation imposed by Legacy Advertising where only one 25 byte message can be broadcasted in one advertisement radio burst. The MAC address (possibly randomized) of the Bluetooth HW is the only way to associate these messages to the same UA. For Bluetooth 5.x and Wi-Fi, it is possible that the same can happen in certain specific situations (e.g. sending large amount of authentication data), although for the majority of normal usage this is unlikely, since the use of <a href="#OPEN_DRONE_ID_MESSAGE_PACK">MESSAGE_PACK</a>s is mandated. For data received via internet, the data packet will always contain the unique serial number/ID of the originating UA but no associated MAC address.</p><p>In order to allow e.g. a DAA component to sort and identify which UA each data message has originated from, the RID receiver components must add, to the MAVLink message, either the MAC address or the ID number associated with the UA that originated the data message, before sending it on the internal UAS MAVLink network. This information must be added in the <code>id_or_mac</code> field of each MAVLink message.</p><p>The serial/ID is copied directly from the <code>uas_id</code> field with NULLs in the unused portion. The MAC address must be entered in ASCII format with NULLs in the unused portion. Any separation characters must be removed. E.g. &quot;30-65-EC-6F-C4-58&quot; or &quot;30:65:EC:6F:C4:58&quot; must be represented as the ASCII string &quot;3065EC6FC458&quot;. When not used for the above purpose, the <code>id_or_mac</code> field must be filled with NULLs.</p><p>The MAVLink system/component listening to the MAVLink messages must be aware that it is possible to receive drone ID data from the same UA via multiple receive paths (e.g. Wi-Fi and internet). Filtering and merging of the data (and possible deletion of duplicates) will be needed and it must keep track of both a possible MAC address and the serial/ID of the other UAs. Additional filtering and sorting based on the timestamp in the <a href="#OPEN_DRONE_ID_LOCATION">LOCATION</a> or <a href="#OPEN_DRONE_ID_SYSTEM">SYSTEM</a> messages can also be needed in order to generate a consistent flight path for the other UAs.</p>',65)]))}const g=a(i,[["render",s]]);export{u as __pageData,g as default};
