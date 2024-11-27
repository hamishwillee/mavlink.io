import{_ as a,c as t,a8 as n,o as r}from"./chunks/framework.CnRC9NRC.js";const f=JSON.parse('{"title":"Traffic Managment and Avoidance (UTM/ADSB)","description":"","frontmatter":{},"headers":[],"relativePath":"ko/services/traffic_management.md","filePath":"ko/services/traffic_management.md"}'),o={name:"ko/services/traffic_management.md"};function s(i,e,d,l,m,c){return r(),t("div",null,e[0]||(e[0]=[n('<h1 id="traffic-managment-and-avoidance-utm-adsb" tabindex="-1">Traffic Managment and Avoidance (UTM/ADSB) <a class="header-anchor" href="#traffic-managment-and-avoidance-utm-adsb" aria-label="Permalink to &quot;Traffic Managment and Avoidance (UTM/ADSB)&quot;">​</a></h1><p>Air traffic management and avoidance systems enable vehicles to share their position and planned path or trajectory with other vehicles (and ground stations), allowing them to take appropriate action to avoid collisions.</p><p>The approaches used to share information vary; some systems use transponders to detect and publish to local traffic, while others publish to/receive information from Internet services that aggregate the data from many vehicles. Some systems might use both approaches!</p><p>The approaches used to handle potential collisions depend on the flight stack, and might include: warning the user, holding, landing, pausing a mission etc.</p><p>There are two main traffic management systems supported by MAVLink:</p><ul><li><p><a href="https://www.faa.gov/uas/research_development/traffic_management/" target="_blank" rel="noreferrer">Unmanned Aircraft System Traffic Management (UTM)</a> - an avoidance system focussing on UAVs.</p></li><li><p><a href="https://en.wikipedia.org/wiki/Automatic_Dependent_Surveillance%E2%80%93Broadcast" target="_blank" rel="noreferrer">Automatic Dependent Surveillance–Broadcast (ADS-B</a> - an avoidance system developed for manned aircraft and extended to UAVs.</p><div class="note custom-block github-alert"><p class="custom-block-title">FLARM is a transponder-based system that integrates with MAVLink using the ADS-B messages.</p><p></p></div></li></ul><p>The two systems share significant overlap and have very similar messages. Both have a single message that encapsulates the vehicle position and trajectory: <a href="#UTM_GLOBAL_POSITION">UTM_GLOBAL_POSITION</a> and <a href="#ADSB_VEHICLE">ADSB_VEHICLE</a>. A flight controller will typically recieve these messages from the appropriate transponder or service, and may also publish them to a transponder or service.</p><div class="note custom-block github-alert"><p class="custom-block-title">The [Open Drone ID](https://mavlink.io/en/services/opendroneid.html) service provides additional information about vehicle identity. This is still a &quot;work in progress&quot;, and there are no known MAVLink implementations,</p><p></p></div><h2 id="message-enum-summary" tabindex="-1">Message/Enum Summary <a class="header-anchor" href="#message-enum-summary" aria-label="Permalink to &quot;Message/Enum Summary&quot;">​</a></h2><h3 id="unmanned-aircraft-system-traffic-management-utm" tabindex="-1">Unmanned Aircraft System Traffic Management (UTM) <a class="header-anchor" href="#unmanned-aircraft-system-traffic-management-utm" aria-label="Permalink to &quot;Unmanned Aircraft System Traffic Management (UTM)&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Message</th><th>Description</th></tr></thead><tbody><tr><td><a id="UTM_GLOBAL_POSITION"></a><a href="./../messages/common.html#UTM_GLOBAL_POSITION">UTM_GLOBAL_POSITION</a></td><td>The global position resulting from GPS and sensor fusion.</td></tr></tbody></table><table tabindex="0"><thead><tr><th>Enum</th><th>Description</th></tr></thead><tbody><tr><td><a id="UTM_FLIGHT_STATE"></a><a href="./../messages/common.html#UTM_FLIGHT_STATE">UTM_FLIGHT_STATE</a></td><td>Flight state of the vehicle: unknown, landed, flying, emergency etc.</td></tr><tr><td><a id="UTM_DATA_AVAIL_FLAGS"></a><a href="./../messages/common.html#UTM_DATA_AVAIL_FLAGS">UTM_DATA_AVAIL_FLAGS</a></td><td>Flags that indicate which of the fields in <a href="#UTM_GLOBAL_POSITION">UTM_GLOBAL_POSITION</a> contain valid data.</td></tr></tbody></table><h3 id="automatic-dependent-surveillance–broadcast-ads-b" tabindex="-1">Automatic Dependent Surveillance–Broadcast (ADS-B) <a class="header-anchor" href="#automatic-dependent-surveillance–broadcast-ads-b" aria-label="Permalink to &quot;Automatic Dependent Surveillance–Broadcast (ADS-B)&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Message</th><th>Description</th></tr></thead><tbody><tr><td><a id="ADSB_VEHICLE"></a><a href="./../messages/common.html#ADSB_VEHICLE">ADSB_VEHICLE</a></td><td>XXXXXX The global position resulting from GPS and sensor fusion.</td></tr></tbody></table><table tabindex="0"><thead><tr><th>Enum</th><th>Description</th></tr></thead><tbody><tr><td><a id="ADSB_ALTITUDE_TYPE"></a><a href="./../messages/common.html#ADSB_ALTITUDE_TYPE">ADSB_ALTITUDE_TYPE</a></td><td>The source of altitude data - e.g. GNSS system or barometer.</td></tr><tr><td><a id="ADSB_EMITTER_TYPE"></a><a href="./../messages/common.html#ADSB_EMITTER_TYPE">ADSB_EMITTER_TYPE</a></td><td>ADSB classification for the type of vehicle emitting the transponder signal (most drones will set <code>ADSB_EMITTER_TYPE_UAV</code>)</td></tr><tr><td><a id="ADSB_FLAGS"></a><a href="./../messages/common.html#ADSB_FLAGS">ADSB_FLAGS</a></td><td>Flags that indicate which of the fields in <a href="#ADSB_VEHICLE">ADSB_VEHICLE</a> contain valid data.</td></tr></tbody></table><table tabindex="0"><thead><tr><th>Ids</th><th>Description</th></tr></thead><tbody><tr><td><a id="MAV_TYPE_ADSB"></a><a href="./../messages/common.html#MAV_TYPE_ADSB">MAV_TYPE_ADSB</a></td><td><code>MAV_TYPE</code> for a stand-alone MAVLink ADS-B transponder component (not part of an autopilot)</td></tr><tr><td><a id="MAV_COMP_ID_ADSB"></a><a href="./../messages/common.html#MAV_COMP_ID_ADSB">MAV_COMP_ID_ADSB</a></td><td>MAVLink reserved component id for a MAVLink ADS-B transponder component (not part of an autopilot)</td></tr><tr><td><a id="MAV_TYPE_FLARM"></a><a href="./../messages/common.html#MAV_TYPE_FLARM">MAV_TYPE_ADSB</a></td><td><code>MAV_TYPE</code> for a stand-alone MAVLink Flarm transponder component (not part of an autopilot)</td></tr><tr><td><a id="MAV_COMP_ID_FLARM"></a><a href="./../messages/common.html#MAV_COMP_ID_FLARM">MAV_COMP_ID_FLARM</a></td><td>MAVLink reserved component id for a MAVLink Flarm transponder component (not part of an autopilot)</td></tr></tbody></table><h2 id="구현" tabindex="-1">구현 <a class="header-anchor" href="#구현" aria-label="Permalink to &quot;구현&quot;">​</a></h2><p>PX4:</p><ul><li><a href="https://docs.px4.io/master/en/advanced_features/traffic_avoidance_utm.html" target="_blank" rel="noreferrer">UAS Traffic Management (UTM)</a></li><li><a href="https://docs.px4.io/master/en/advanced_features/traffic_avoidance_adsb.html" target="_blank" rel="noreferrer">ADS-B</a></li></ul><p>ArduPilot:</p><ul><li><a href="https://ardupilot.org/copter/docs/common-ads-b-receiver.html" target="_blank" rel="noreferrer">ADS-B</a></li></ul><p>QGroundControl:</p><ul><li><a href="https://docs.qgroundcontrol.com/master/en/SettingsView/General.html#adsb_server" target="_blank" rel="noreferrer">General Settings &gt; ADS-B Server</a> (connects to an ADS-B server to display nearby traffic).</li></ul>',23)]))}const p=a(o,[["render",s]]);export{f as __pageData,p as default};
