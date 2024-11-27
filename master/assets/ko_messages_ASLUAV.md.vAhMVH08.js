import{_ as d,c as e,a8 as a,o}from"./chunks/framework.CnRC9NRC.js";const h=JSON.parse('{"title":"Dialect: ASLUAV","description":"","frontmatter":{},"headers":[],"relativePath":"ko/messages/ASLUAV.md","filePath":"ko/messages/ASLUAV.md"}'),r={name:"ko/messages/ASLUAV.md"};function i(c,t,n,s,l,_){return o(),e("div",null,t[0]||(t[0]=[a('<h1 id="dialect-asluav" tabindex="-1">Dialect: ASLUAV <a class="header-anchor" href="#dialect-asluav" aria-label="Permalink to &quot;Dialect: ASLUAV&quot;">​</a></h1><blockquote><p><strong>Warning</strong> This topic documents the version of the dialect file in the <a href="https://github.com/mavlink/mavlink" target="_blank" rel="noreferrer">mavlink/mavlink</a> Github repository, which may not be up to date with the file in the source repository (it is up to the dialect owner to push changes when needed). The source repo should be listed in the comments at the top of the XML definition file listed below (but may not be).</p></blockquote><p>This topic is a human-readable form of the XML definition file: <a href="https://github.com/mavlink/mavlink/blob/master/message_definitions/v1.0/ASLUAV.xml" target="_blank" rel="noreferrer">ASLUAV.xml</a>.</p><p><span id="mav2_extension_field"></span></p><blockquote><p><strong>Note</strong></p><ul><li>MAVLink 2 <a href="./../guide/define_xml_element.html#message_extensions">extension fields</a> are displayed in blue.</li><li>Entities from dialects are displayed only as headings (with link to original)</li></ul></blockquote><h2 id="mavlink-include-files" tabindex="-1">MAVLink Include Files <a class="header-anchor" href="#mavlink-include-files" aria-label="Permalink to &quot;MAVLink Include Files&quot;">​</a></h2><ul><li><a href="./../messages/common.html">common.xml</a></li></ul><h2 id="목차" tabindex="-1">목차 <a class="header-anchor" href="#목차" aria-label="Permalink to &quot;목차&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Defined</th><th>Included</th></tr></thead><tbody><tr><td><a href="#messages">Messages</a></td><td>17</td><td>226</td></tr><tr><td><a href="#enumerated-types">Enums</a></td><td>2</td><td>144</td></tr><tr><td><a href="#mav_commands">Commands</a></td><td>166</td><td>0</td></tr></tbody></table><p>The following sections list all entities in the dialect (both included and defined in this file).</p><h2 id="messages" tabindex="-1">Messages <a class="header-anchor" href="#messages" aria-label="Permalink to &quot;Messages&quot;">​</a></h2><h3 id="COMMAND_INT_STAMPED" tabindex="-1">COMMAND_INT_STAMPED (223) <a class="header-anchor" href="#COMMAND_INT_STAMPED" aria-label="Permalink to &quot;COMMAND_INT_STAMPED (223) {#COMMAND_INT_STAMPED}&quot;">​</a></h3><p>Message encoding a command with parameters as scaled integers and additional metadata. Scaling depends on the actual command value.</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Values</th><th>Description</th></tr></thead><tbody><tr><td>utc_time</td><td><code>uint32_t</code></td><td></td><td>UTC time, seconds elapsed since 01.01.1970</td></tr><tr><td>vehicle_timestamp</td><td><code>uint64_t</code></td><td></td><td>Microseconds elapsed since vehicle boot</td></tr><tr><td>target_system</td><td><code>uint8_t</code></td><td></td><td>System ID</td></tr><tr><td>target_component</td><td><code>uint8_t</code></td><td></td><td>Component ID</td></tr><tr><td>frame</td><td><code>uint8_t</code></td><td><a href="#MAV_FRAME">MAV_FRAME</a></td><td>The coordinate system of the COMMAND, as defined by <a href="#MAV_FRAME">MAV_FRAME</a> enum</td></tr><tr><td>command</td><td><code>uint16_t</code></td><td><a href="#mav_commands">MAV_CMD</a></td><td>The scheduled action for the mission item, as defined by <a href="#mav_commands">MAV_CMD</a> enum</td></tr><tr><td>current</td><td><code>uint8_t</code></td><td></td><td>false:0, true:1</td></tr><tr><td>autocontinue</td><td><code>uint8_t</code></td><td></td><td>autocontinue to next wp</td></tr><tr><td>param1</td><td><code>float</code></td><td></td><td>PARAM1, see <a href="#mav_commands">MAV_CMD</a> enum</td></tr><tr><td>param2</td><td><code>float</code></td><td></td><td>PARAM2, see <a href="#mav_commands">MAV_CMD</a> enum</td></tr><tr><td>param3</td><td><code>float</code></td><td></td><td>PARAM3, see <a href="#mav_commands">MAV_CMD</a> enum</td></tr><tr><td>param4</td><td><code>float</code></td><td></td><td>PARAM4, see <a href="#mav_commands">MAV_CMD</a> enum</td></tr><tr><td>x</td><td><code>int32_t</code></td><td></td><td>PARAM5 / local: x position in meters * 1e4, global: latitude in degrees * 10^7</td></tr><tr><td>y</td><td><code>int32_t</code></td><td></td><td>PARAM6 / local: y position in meters * 1e4, global: longitude in degrees * 10^7</td></tr><tr><td>z</td><td><code>float</code></td><td></td><td>PARAM7 / z position: global: altitude in meters (MSL, WGS84, AGL or relative to home - depending on frame).</td></tr></tbody></table><h3 id="COMMAND_LONG_STAMPED" tabindex="-1">COMMAND_LONG_STAMPED (224) <a class="header-anchor" href="#COMMAND_LONG_STAMPED" aria-label="Permalink to &quot;COMMAND_LONG_STAMPED (224) {#COMMAND_LONG_STAMPED}&quot;">​</a></h3><p>Send a command with up to seven parameters to the MAV and additional metadata</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Values</th><th>Description</th></tr></thead><tbody><tr><td>utc_time</td><td><code>uint32_t</code></td><td></td><td>UTC time, seconds elapsed since 01.01.1970</td></tr><tr><td>vehicle_timestamp</td><td><code>uint64_t</code></td><td></td><td>Microseconds elapsed since vehicle boot</td></tr><tr><td>target_system</td><td><code>uint8_t</code></td><td></td><td>System which should execute the command</td></tr><tr><td>target_component</td><td><code>uint8_t</code></td><td></td><td>Component which should execute the command, 0 for all components</td></tr><tr><td>command</td><td><code>uint16_t</code></td><td><a href="#mav_commands">MAV_CMD</a></td><td>Command ID, as defined by <a href="#mav_commands">MAV_CMD</a> enum.</td></tr><tr><td>confirmation</td><td><code>uint8_t</code></td><td></td><td>0: First transmission of this command. 1-255: Confirmation transmissions (e.g. for kill command)</td></tr><tr><td>param1</td><td><code>float</code></td><td></td><td>Parameter 1, as defined by <a href="#mav_commands">MAV_CMD</a> enum.</td></tr><tr><td>param2</td><td><code>float</code></td><td></td><td>Parameter 2, as defined by <a href="#mav_commands">MAV_CMD</a> enum.</td></tr><tr><td>param3</td><td><code>float</code></td><td></td><td>Parameter 3, as defined by <a href="#mav_commands">MAV_CMD</a> enum.</td></tr><tr><td>param4</td><td><code>float</code></td><td></td><td>Parameter 4, as defined by <a href="#mav_commands">MAV_CMD</a> enum.</td></tr><tr><td>param5</td><td><code>float</code></td><td></td><td>Parameter 5, as defined by <a href="#mav_commands">MAV_CMD</a> enum.</td></tr><tr><td>param6</td><td><code>float</code></td><td></td><td>Parameter 6, as defined by <a href="#mav_commands">MAV_CMD</a> enum.</td></tr><tr><td>param7</td><td><code>float</code></td><td></td><td>Parameter 7, as defined by <a href="#mav_commands">MAV_CMD</a> enum.</td></tr></tbody></table><h3 id="SENS_POWER" tabindex="-1">SENS_POWER (8002) <a class="header-anchor" href="#SENS_POWER" aria-label="Permalink to &quot;SENS_POWER (8002) {#SENS_POWER}&quot;">​</a></h3><p>Voltage and current sensor data</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Units</th><th>Description</th></tr></thead><tbody><tr><td>adc121_vspb_volt</td><td><code>float</code></td><td>V</td><td>Power board voltage sensor reading</td></tr><tr><td>adc121_cspb_amp</td><td><code>float</code></td><td>A</td><td>Power board current sensor reading</td></tr><tr><td>adc121_cs1_amp</td><td><code>float</code></td><td>A</td><td>Board current sensor 1 reading</td></tr><tr><td>adc121_cs2_amp</td><td><code>float</code></td><td>A</td><td>Board current sensor 2 reading</td></tr></tbody></table><h3 id="SENS_MPPT" tabindex="-1">SENS_MPPT (8003) <a class="header-anchor" href="#SENS_MPPT" aria-label="Permalink to &quot;SENS_MPPT (8003) {#SENS_MPPT}&quot;">​</a></h3><p>Maximum Power Point Tracker (MPPT) sensor data for solar module power performance tracking</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Units</th><th>Description</th></tr></thead><tbody><tr><td>mppt_timestamp</td><td><code>uint64_t</code></td><td>us</td><td>MPPT last timestamp</td></tr><tr><td>mppt1_volt</td><td><code>float</code></td><td>V</td><td>MPPT1 voltage</td></tr><tr><td>mppt1_amp</td><td><code>float</code></td><td>A</td><td>MPPT1 current</td></tr><tr><td>mppt1_pwm</td><td><code>uint16_t</code></td><td>us</td><td>MPPT1 pwm</td></tr><tr><td>mppt1_status</td><td><code>uint8_t</code></td><td></td><td>MPPT1 status</td></tr><tr><td>mppt2_volt</td><td><code>float</code></td><td>V</td><td>MPPT2 voltage</td></tr><tr><td>mppt2_amp</td><td><code>float</code></td><td>A</td><td>MPPT2 current</td></tr><tr><td>mppt2_pwm</td><td><code>uint16_t</code></td><td>us</td><td>MPPT2 pwm</td></tr><tr><td>mppt2_status</td><td><code>uint8_t</code></td><td></td><td>MPPT2 status</td></tr><tr><td>mppt3_volt</td><td><code>float</code></td><td>V</td><td>MPPT3 voltage</td></tr><tr><td>mppt3_amp</td><td><code>float</code></td><td>A</td><td>MPPT3 current</td></tr><tr><td>mppt3_pwm</td><td><code>uint16_t</code></td><td>us</td><td>MPPT3 pwm</td></tr><tr><td>mppt3_status</td><td><code>uint8_t</code></td><td></td><td>MPPT3 status</td></tr></tbody></table><h3 id="ASLCTRL_DATA" tabindex="-1">ASLCTRL_DATA (8004) <a class="header-anchor" href="#ASLCTRL_DATA" aria-label="Permalink to &quot;ASLCTRL_DATA (8004) {#ASLCTRL_DATA}&quot;">​</a></h3><p>ASL-fixed-wing controller data</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Units</th><th>Description</th></tr></thead><tbody><tr><td>timestamp</td><td><code>uint64_t</code></td><td>us</td><td>Timestamp</td></tr><tr><td>aslctrl_mode</td><td><code>uint8_t</code></td><td></td><td>ASLCTRL control-mode (manual, stabilized, auto, etc...)</td></tr><tr><td>h</td><td><code>float</code></td><td></td><td>See sourcecode for a description of these values...</td></tr><tr><td>hRef</td><td><code>float</code></td><td></td><td></td></tr><tr><td>hRef_t</td><td><code>float</code></td><td></td><td></td></tr><tr><td>PitchAngle</td><td><code>float</code></td><td>deg</td><td>Pitch angle</td></tr><tr><td>PitchAngleRef</td><td><code>float</code></td><td>deg</td><td>Pitch angle reference</td></tr><tr><td>q</td><td><code>float</code></td><td></td><td></td></tr><tr><td>qRef</td><td><code>float</code></td><td></td><td></td></tr><tr><td>uElev</td><td><code>float</code></td><td></td><td></td></tr><tr><td>uThrot</td><td><code>float</code></td><td></td><td></td></tr><tr><td>uThrot2</td><td><code>float</code></td><td></td><td></td></tr><tr><td>nZ</td><td><code>float</code></td><td></td><td></td></tr><tr><td>AirspeedRef</td><td><code>float</code></td><td>m/s</td><td>Airspeed reference</td></tr><tr><td>SpoilersEngaged</td><td><code>uint8_t</code></td><td></td><td></td></tr><tr><td>YawAngle</td><td><code>float</code></td><td>deg</td><td>Yaw angle</td></tr><tr><td>YawAngleRef</td><td><code>float</code></td><td>deg</td><td>Yaw angle reference</td></tr><tr><td>RollAngle</td><td><code>float</code></td><td>deg</td><td>Roll angle</td></tr><tr><td>RollAngleRef</td><td><code>float</code></td><td>deg</td><td>Roll angle reference</td></tr><tr><td>p</td><td><code>float</code></td><td></td><td></td></tr><tr><td>pRef</td><td><code>float</code></td><td></td><td></td></tr><tr><td>r</td><td><code>float</code></td><td></td><td></td></tr><tr><td>rRef</td><td><code>float</code></td><td></td><td></td></tr><tr><td>uAil</td><td><code>float</code></td><td></td><td></td></tr><tr><td>uRud</td><td><code>float</code></td><td></td><td></td></tr></tbody></table><h3 id="ASLCTRL_DEBUG" tabindex="-1">ASLCTRL_DEBUG (8005) <a class="header-anchor" href="#ASLCTRL_DEBUG" aria-label="Permalink to &quot;ASLCTRL_DEBUG (8005) {#ASLCTRL_DEBUG}&quot;">​</a></h3><p>ASL-fixed-wing controller debug data</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>i32_1</td><td><code>uint32_t</code></td><td>Debug data</td></tr><tr><td>i8_1</td><td><code>uint8_t</code></td><td>Debug data</td></tr><tr><td>i8_2</td><td><code>uint8_t</code></td><td>Debug data</td></tr><tr><td>f_1</td><td><code>float</code></td><td>Debug data</td></tr><tr><td>f_2</td><td><code>float</code></td><td>Debug data</td></tr><tr><td>f_3</td><td><code>float</code></td><td>Debug data</td></tr><tr><td>f_4</td><td><code>float</code></td><td>Debug data</td></tr><tr><td>f_5</td><td><code>float</code></td><td>Debug data</td></tr><tr><td>f_6</td><td><code>float</code></td><td>Debug data</td></tr><tr><td>f_7</td><td><code>float</code></td><td>Debug data</td></tr><tr><td>f_8</td><td><code>float</code></td><td>Debug data</td></tr></tbody></table><h3 id="ASLUAV_STATUS" tabindex="-1">ASLUAV_STATUS (8006) <a class="header-anchor" href="#ASLUAV_STATUS" aria-label="Permalink to &quot;ASLUAV_STATUS (8006) {#ASLUAV_STATUS}&quot;">​</a></h3><p>Extended state information for ASLUAVs</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>LED_status</td><td><code>uint8_t</code></td><td>Status of the position-indicator LEDs</td></tr><tr><td>SATCOM_status</td><td><code>uint8_t</code></td><td>Status of the IRIDIUM satellite communication system</td></tr><tr><td>Servo_status</td><td><code>uint8_t[8]</code></td><td>Status vector for up to 8 servos</td></tr><tr><td>Motor_rpm</td><td><code>float</code></td><td>Motor RPM</td></tr></tbody></table><h3 id="EKF_EXT" tabindex="-1">EKF_EXT (8007) <a class="header-anchor" href="#EKF_EXT" aria-label="Permalink to &quot;EKF_EXT (8007) {#EKF_EXT}&quot;">​</a></h3><p>Extended EKF state estimates for ASLUAVs</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Units</th><th>Description</th></tr></thead><tbody><tr><td>timestamp</td><td><code>uint64_t</code></td><td>us</td><td>Time since system start</td></tr><tr><td>Windspeed</td><td><code>float</code></td><td>m/s</td><td>Magnitude of wind velocity (in lateral inertial plane)</td></tr><tr><td>WindDir</td><td><code>float</code></td><td>rad</td><td>Wind heading angle from North</td></tr><tr><td>WindZ</td><td><code>float</code></td><td>m/s</td><td>Z (Down) component of inertial wind velocity</td></tr><tr><td>Airspeed</td><td><code>float</code></td><td>m/s</td><td>Magnitude of air velocity</td></tr><tr><td>beta</td><td><code>float</code></td><td>rad</td><td>Sideslip angle</td></tr><tr><td>alpha</td><td><code>float</code></td><td>rad</td><td>Angle of attack</td></tr></tbody></table><h3 id="ASL_OBCTRL" tabindex="-1">ASL_OBCTRL (8008) <a class="header-anchor" href="#ASL_OBCTRL" aria-label="Permalink to &quot;ASL_OBCTRL (8008) {#ASL_OBCTRL}&quot;">​</a></h3><p>Off-board controls/commands for ASLUAVs</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Units</th><th>Description</th></tr></thead><tbody><tr><td>timestamp</td><td><code>uint64_t</code></td><td>us</td><td>Time since system start</td></tr><tr><td>uElev</td><td><code>float</code></td><td></td><td>Elevator command [~]</td></tr><tr><td>uThrot</td><td><code>float</code></td><td></td><td>Throttle command [~]</td></tr><tr><td>uThrot2</td><td><code>float</code></td><td></td><td>Throttle 2 command [~]</td></tr><tr><td>uAilL</td><td><code>float</code></td><td></td><td>Left aileron command [~]</td></tr><tr><td>uAilR</td><td><code>float</code></td><td></td><td>Right aileron command [~]</td></tr><tr><td>uRud</td><td><code>float</code></td><td></td><td>Rudder command [~]</td></tr><tr><td>obctrl_status</td><td><code>uint8_t</code></td><td></td><td>Off-board computer status</td></tr></tbody></table><h3 id="SENS_ATMOS" tabindex="-1">SENS_ATMOS (8009) <a class="header-anchor" href="#SENS_ATMOS" aria-label="Permalink to &quot;SENS_ATMOS (8009) {#SENS_ATMOS}&quot;">​</a></h3><p>Atmospheric sensors (temperature, humidity, ...)</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Units</th><th>Description</th></tr></thead><tbody><tr><td>timestamp</td><td><code>uint64_t</code></td><td>us</td><td>Time since system boot</td></tr><tr><td>TempAmbient</td><td><code>float</code></td><td>degC</td><td>Ambient temperature</td></tr><tr><td>Humidity</td><td><code>float</code></td><td>%</td><td>Relative humidity</td></tr></tbody></table><h3 id="SENS_BATMON" tabindex="-1">SENS_BATMON (8010) <a class="header-anchor" href="#SENS_BATMON" aria-label="Permalink to &quot;SENS_BATMON (8010) {#SENS_BATMON}&quot;">​</a></h3><p>Battery pack monitoring data for Li-Ion batteries</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Units</th><th>Description</th></tr></thead><tbody><tr><td>batmon_timestamp</td><td><code>uint64_t</code></td><td>us</td><td>Time since system start</td></tr><tr><td>temperature</td><td><code>float</code></td><td>degC</td><td>Battery pack temperature</td></tr><tr><td>voltage</td><td><code>uint16_t</code></td><td>mV</td><td>Battery pack voltage</td></tr><tr><td>current</td><td><code>int16_t</code></td><td>mA</td><td>Battery pack current</td></tr><tr><td>SoC</td><td><code>uint8_t</code></td><td></td><td>Battery pack state-of-charge</td></tr><tr><td>batterystatus</td><td><code>uint16_t</code></td><td></td><td>Battery monitor status report bits in Hex</td></tr><tr><td>serialnumber</td><td><code>uint16_t</code></td><td></td><td>Battery monitor serial number in Hex</td></tr><tr><td>safetystatus</td><td><code>uint32_t</code></td><td></td><td>Battery monitor safetystatus report bits in Hex</td></tr><tr><td>operationstatus</td><td><code>uint32_t</code></td><td></td><td>Battery monitor operation status report bits in Hex</td></tr><tr><td>cellvoltage1</td><td><code>uint16_t</code></td><td>mV</td><td>Battery pack cell 1 voltage</td></tr><tr><td>cellvoltage2</td><td><code>uint16_t</code></td><td>mV</td><td>Battery pack cell 2 voltage</td></tr><tr><td>cellvoltage3</td><td><code>uint16_t</code></td><td>mV</td><td>Battery pack cell 3 voltage</td></tr><tr><td>cellvoltage4</td><td><code>uint16_t</code></td><td>mV</td><td>Battery pack cell 4 voltage</td></tr><tr><td>cellvoltage5</td><td><code>uint16_t</code></td><td>mV</td><td>Battery pack cell 5 voltage</td></tr><tr><td>cellvoltage6</td><td><code>uint16_t</code></td><td>mV</td><td>Battery pack cell 6 voltage</td></tr></tbody></table><h3 id="FW_SOARING_DATA" tabindex="-1">FW_SOARING_DATA (8011) <a class="header-anchor" href="#FW_SOARING_DATA" aria-label="Permalink to &quot;FW_SOARING_DATA (8011) {#FW_SOARING_DATA}&quot;">​</a></h3><p>Fixed-wing soaring (i.e. thermal seeking) data</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Units</th><th>Description</th></tr></thead><tbody><tr><td>timestamp</td><td><code>uint64_t</code></td><td>ms</td><td>Timestamp</td></tr><tr><td>timestampModeChanged</td><td><code>uint64_t</code></td><td>ms</td><td>Timestamp since last mode change</td></tr><tr><td>xW</td><td><code>float</code></td><td>m/s</td><td>Thermal core updraft strength</td></tr><tr><td>xR</td><td><code>float</code></td><td>m</td><td>Thermal radius</td></tr><tr><td>xLat</td><td><code>float</code></td><td>deg</td><td>Thermal center latitude</td></tr><tr><td>xLon</td><td><code>float</code></td><td>deg</td><td>Thermal center longitude</td></tr><tr><td>VarW</td><td><code>float</code></td><td></td><td>Variance W</td></tr><tr><td>VarR</td><td><code>float</code></td><td></td><td>Variance R</td></tr><tr><td>VarLat</td><td><code>float</code></td><td></td><td>Variance Lat</td></tr><tr><td>VarLon</td><td><code>float</code></td><td></td><td>Variance Lon</td></tr><tr><td>LoiterRadius</td><td><code>float</code></td><td>m</td><td>Suggested loiter radius</td></tr><tr><td>LoiterDirection</td><td><code>float</code></td><td></td><td>Suggested loiter direction</td></tr><tr><td>DistToSoarPoint</td><td><code>float</code></td><td>m</td><td>Distance to soar point</td></tr><tr><td>vSinkExp</td><td><code>float</code></td><td>m/s</td><td>Expected sink rate at current airspeed, roll and throttle</td></tr><tr><td>z1_LocalUpdraftSpeed</td><td><code>float</code></td><td>m/s</td><td>Measurement / updraft speed at current/local airplane position</td></tr><tr><td>z2_DeltaRoll</td><td><code>float</code></td><td>deg</td><td>Measurement / roll angle tracking error</td></tr><tr><td>z1_exp</td><td><code>float</code></td><td></td><td>Expected measurement 1</td></tr><tr><td>z2_exp</td><td><code>float</code></td><td></td><td>Expected measurement 2</td></tr><tr><td>ThermalGSNorth</td><td><code>float</code></td><td>m/s</td><td>Thermal drift (from estimator prediction step only)</td></tr><tr><td>ThermalGSEast</td><td><code>float</code></td><td>m/s</td><td>Thermal drift (from estimator prediction step only)</td></tr><tr><td>TSE_dot</td><td><code>float</code></td><td>m/s</td><td>Total specific energy change (filtered)</td></tr><tr><td>DebugVar1</td><td><code>float</code></td><td></td><td>Debug variable 1</td></tr><tr><td>DebugVar2</td><td><code>float</code></td><td></td><td>Debug variable 2</td></tr><tr><td>ControlMode</td><td><code>uint8_t</code></td><td></td><td>Control Mode [-]</td></tr><tr><td>valid</td><td><code>uint8_t</code></td><td></td><td>Data valid [-]</td></tr></tbody></table><h3 id="SENSORPOD_STATUS" tabindex="-1">SENSORPOD_STATUS (8012) <a class="header-anchor" href="#SENSORPOD_STATUS" aria-label="Permalink to &quot;SENSORPOD_STATUS (8012) {#SENSORPOD_STATUS}&quot;">​</a></h3><p>Monitoring of sensorpod status</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Units</th><th>Description</th></tr></thead><tbody><tr><td>timestamp</td><td><code>uint64_t</code></td><td>ms</td><td>Timestamp in linuxtime (since 1.1.1970)</td></tr><tr><td>visensor_rate_1</td><td><code>uint8_t</code></td><td></td><td>Rate of ROS topic 1</td></tr><tr><td>visensor_rate_2</td><td><code>uint8_t</code></td><td></td><td>Rate of ROS topic 2</td></tr><tr><td>visensor_rate_3</td><td><code>uint8_t</code></td><td></td><td>Rate of ROS topic 3</td></tr><tr><td>visensor_rate_4</td><td><code>uint8_t</code></td><td></td><td>Rate of ROS topic 4</td></tr><tr><td>recording_nodes_count</td><td><code>uint8_t</code></td><td></td><td>Number of recording nodes</td></tr><tr><td>cpu_temp</td><td><code>uint8_t</code></td><td>degC</td><td>Temperature of sensorpod CPU in</td></tr><tr><td>free_space</td><td><code>uint16_t</code></td><td></td><td>Free space available in recordings directory in [Gb] * 1e2</td></tr></tbody></table><h3 id="SENS_POWER_BOARD" tabindex="-1">SENS_POWER_BOARD (8013) <a class="header-anchor" href="#SENS_POWER_BOARD" aria-label="Permalink to &quot;SENS_POWER_BOARD (8013) {#SENS_POWER_BOARD}&quot;">​</a></h3><p>Monitoring of power board status</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Units</th><th>Description</th></tr></thead><tbody><tr><td>timestamp</td><td><code>uint64_t</code></td><td>us</td><td>Timestamp</td></tr><tr><td>pwr_brd_status</td><td><code>uint8_t</code></td><td></td><td>Power board status register</td></tr><tr><td>pwr_brd_led_status</td><td><code>uint8_t</code></td><td></td><td>Power board leds status</td></tr><tr><td>pwr_brd_system_volt</td><td><code>float</code></td><td>V</td><td>Power board system voltage</td></tr><tr><td>pwr_brd_servo_volt</td><td><code>float</code></td><td>V</td><td>Power board servo voltage</td></tr><tr><td>pwr_brd_digital_volt</td><td><code>float</code></td><td>V</td><td>Power board digital voltage</td></tr><tr><td>pwr_brd_mot_l_amp</td><td><code>float</code></td><td>A</td><td>Power board left motor current sensor</td></tr><tr><td>pwr_brd_mot_r_amp</td><td><code>float</code></td><td>A</td><td>Power board right motor current sensor</td></tr><tr><td>pwr_brd_analog_amp</td><td><code>float</code></td><td>A</td><td>Power board analog current sensor</td></tr><tr><td>pwr_brd_digital_amp</td><td><code>float</code></td><td>A</td><td>Power board digital current sensor</td></tr><tr><td>pwr_brd_ext_amp</td><td><code>float</code></td><td>A</td><td>Power board extension current sensor</td></tr><tr><td>pwr_brd_aux_amp</td><td><code>float</code></td><td>A</td><td>Power board aux current sensor</td></tr></tbody></table><h3 id="GSM_LINK_STATUS" tabindex="-1">GSM_LINK_STATUS (8014) <a class="header-anchor" href="#GSM_LINK_STATUS" aria-label="Permalink to &quot;GSM_LINK_STATUS (8014) {#GSM_LINK_STATUS}&quot;">​</a></h3><p>Status of GSM modem (connected to onboard computer)</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Units</th><th>Values</th><th>Description</th></tr></thead><tbody><tr><td>timestamp</td><td><code>uint64_t</code></td><td>us</td><td></td><td>Timestamp (of OBC)</td></tr><tr><td>gsm_modem_type</td><td><code>uint8_t</code></td><td></td><td><a href="#GSM_MODEM_TYPE">GSM_MODEM_TYPE</a></td><td>GSM modem used</td></tr><tr><td>gsm_link_type</td><td><code>uint8_t</code></td><td></td><td><a href="#GSM_LINK_TYPE">GSM_LINK_TYPE</a></td><td>GSM link type</td></tr><tr><td>rssi</td><td><code>uint8_t</code></td><td></td><td></td><td>RSSI as reported by modem (unconverted)</td></tr><tr><td>rsrp_rscp</td><td><code>uint8_t</code></td><td></td><td></td><td>RSRP (LTE) or RSCP (WCDMA) as reported by modem (unconverted)</td></tr><tr><td>sinr_ecio</td><td><code>uint8_t</code></td><td></td><td></td><td>SINR (LTE) or ECIO (WCDMA) as reported by modem (unconverted)</td></tr><tr><td>rsrq</td><td><code>uint8_t</code></td><td></td><td></td><td>RSRQ (LTE only) as reported by modem (unconverted)</td></tr></tbody></table><h3 id="SATCOM_LINK_STATUS" tabindex="-1">SATCOM_LINK_STATUS (8015) <a class="header-anchor" href="#SATCOM_LINK_STATUS" aria-label="Permalink to &quot;SATCOM_LINK_STATUS (8015) {#SATCOM_LINK_STATUS}&quot;">​</a></h3><p>Status of the SatCom link</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Units</th><th>Description</th></tr></thead><tbody><tr><td>timestamp</td><td><code>uint64_t</code></td><td>us</td><td>Timestamp</td></tr><tr><td>last_heartbeat</td><td><code>uint64_t</code></td><td>us</td><td>Timestamp of the last successful sbd session</td></tr><tr><td>failed_sessions</td><td><code>uint16_t</code></td><td></td><td>Number of failed sessions</td></tr><tr><td>successful_sessions</td><td><code>uint16_t</code></td><td></td><td>Number of successful sessions</td></tr><tr><td>signal_quality</td><td><code>uint8_t</code></td><td></td><td>Signal quality</td></tr><tr><td>ring_pending</td><td><code>uint8_t</code></td><td></td><td>Ring call pending</td></tr><tr><td>tx_session_pending</td><td><code>uint8_t</code></td><td></td><td>Transmission session pending</td></tr><tr><td>rx_session_pending</td><td><code>uint8_t</code></td><td></td><td>Receiving session pending</td></tr></tbody></table><h3 id="SENSOR_AIRFLOW_ANGLES" tabindex="-1">SENSOR_AIRFLOW_ANGLES (8016) <a class="header-anchor" href="#SENSOR_AIRFLOW_ANGLES" aria-label="Permalink to &quot;SENSOR_AIRFLOW_ANGLES (8016) {#SENSOR_AIRFLOW_ANGLES}&quot;">​</a></h3><p>Calibrated airflow angle measurements</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Units</th><th>Description</th></tr></thead><tbody><tr><td>timestamp</td><td><code>uint64_t</code></td><td>us</td><td>Timestamp</td></tr><tr><td>angleofattack</td><td><code>float</code></td><td>deg</td><td>Angle of attack</td></tr><tr><td>angleofattack_valid</td><td><code>uint8_t</code></td><td></td><td>Angle of attack measurement valid</td></tr><tr><td>sideslip</td><td><code>float</code></td><td>deg</td><td>Sideslip angle</td></tr><tr><td>sideslip_valid</td><td><code>uint8_t</code></td><td></td><td>Sideslip angle measurement valid</td></tr></tbody></table><h2 id="enumerated-types" tabindex="-1">Enumerated Types <a class="header-anchor" href="#enumerated-types" aria-label="Permalink to &quot;Enumerated Types&quot;">​</a></h2><h3 id="GSM_LINK_TYPE" tabindex="-1">GSM_LINK_TYPE <a class="header-anchor" href="#GSM_LINK_TYPE" aria-label="Permalink to &quot;GSM_LINK_TYPE {#GSM_LINK_TYPE}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Value</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a id="GSM_LINK_TYPE_NONE"></a>0</td><td><a href="#GSM_LINK_TYPE_NONE">GSM_LINK_TYPE_NONE</a></td><td>no service</td></tr><tr><td><a id="GSM_LINK_TYPE_UNKNOWN"></a>1</td><td><a href="#GSM_LINK_TYPE_UNKNOWN">GSM_LINK_TYPE_UNKNOWN</a></td><td>link type unknown</td></tr><tr><td><a id="GSM_LINK_TYPE_2G"></a>2</td><td><a href="#GSM_LINK_TYPE_2G">GSM_LINK_TYPE_2G</a></td><td>2G (GSM/GRPS/EDGE) link</td></tr><tr><td><a id="GSM_LINK_TYPE_3G"></a>3</td><td><a href="#GSM_LINK_TYPE_3G">GSM_LINK_TYPE_3G</a></td><td>3G link (WCDMA/HSDPA/HSPA)</td></tr><tr><td><a id="GSM_LINK_TYPE_4G"></a>4</td><td><a href="#GSM_LINK_TYPE_4G">GSM_LINK_TYPE_4G</a></td><td>4G link (LTE)</td></tr></tbody></table><h3 id="GSM_MODEM_TYPE" tabindex="-1">GSM_MODEM_TYPE <a class="header-anchor" href="#GSM_MODEM_TYPE" aria-label="Permalink to &quot;GSM_MODEM_TYPE {#GSM_MODEM_TYPE}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Value</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a id="GSM_MODEM_TYPE_UNKNOWN"></a>0</td><td><a href="#GSM_MODEM_TYPE_UNKNOWN">GSM_MODEM_TYPE_UNKNOWN</a></td><td>not specified</td></tr><tr><td><a id="GSM_MODEM_TYPE_HUAWEI_E3372"></a>1</td><td><a href="#GSM_MODEM_TYPE_HUAWEI_E3372">GSM_MODEM_TYPE_HUAWEI_E3372</a></td><td>HUAWEI LTE USB Stick E3372</td></tr></tbody></table><h2 id="mav_commands" tabindex="-1">Commands (MAV_CMD) <a class="header-anchor" href="#mav_commands" aria-label="Permalink to &quot;Commands (MAV_CMD) {#mav_commands}&quot;">​</a></h2><h3 id="MAV_CMD_RESET_MPPT" tabindex="-1">MAV_CMD_RESET_MPPT (40001) <a class="header-anchor" href="#MAV_CMD_RESET_MPPT" aria-label="Permalink to &quot;MAV_CMD_RESET_MPPT (40001) {#MAV_CMD_RESET_MPPT}&quot;">​</a></h3><p>Mission command to reset Maximum Power Point Tracker (MPPT)</p><table tabindex="0"><thead><tr><th>Param (Label)</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>MPPT number</td></tr><tr><td>2</td><td>Empty</td></tr><tr><td>3</td><td>Empty</td></tr><tr><td>4</td><td>Empty</td></tr><tr><td>5</td><td>Empty</td></tr><tr><td>6</td><td>Empty</td></tr><tr><td>7</td><td>Empty</td></tr></tbody></table><h3 id="MAV_CMD_PAYLOAD_CONTROL" tabindex="-1">MAV_CMD_PAYLOAD_CONTROL (40002) <a class="header-anchor" href="#MAV_CMD_PAYLOAD_CONTROL" aria-label="Permalink to &quot;MAV_CMD_PAYLOAD_CONTROL (40002) {#MAV_CMD_PAYLOAD_CONTROL}&quot;">​</a></h3><p>Mission command to perform a power cycle on payload</p><table tabindex="0"><thead><tr><th>Param (Label)</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Complete power cycle</td></tr><tr><td>2</td><td>VISensor power cycle</td></tr><tr><td>3</td><td>Empty</td></tr><tr><td>4</td><td>Empty</td></tr><tr><td>5</td><td>Empty</td></tr><tr><td>6</td><td>Empty</td></tr><tr><td>7</td><td>Empty</td></tr></tbody></table>',74)]))}const u=d(r,[["render",i]]);export{h as __pageData,u as default};
