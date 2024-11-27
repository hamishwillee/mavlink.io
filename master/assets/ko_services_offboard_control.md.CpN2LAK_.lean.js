import{_ as t,c as a,a8 as o,o as r}from"./chunks/framework.CnRC9NRC.js";const O=JSON.parse('{"title":"Offboard Control Interface","description":"","frontmatter":{},"headers":[],"relativePath":"ko/services/offboard_control.md","filePath":"ko/services/offboard_control.md"}'),T={name:"ko/services/offboard_control.md"};function s(d,e,_,i,n,l){return r(),a("div",null,e[0]||(e[0]=[o('<h1 id="offboard-control-interface" tabindex="-1">Offboard Control Interface <a class="header-anchor" href="#offboard-control-interface" aria-label="Permalink to &quot;Offboard Control Interface&quot;">​</a></h1><p>The offboard control interface allows an external controller to send low-level attitude, position, velocity, and/or acceleration setpoints to the vehicle.</p><p>This is commonly used to provide external control of a real-time flight stack from a companion/mission computer, for example, in order to implement features such as obstacle avoidance or collision prevention.</p><p>Generally setpoints are only obeyed in a specific flight-stack mode. The flight stack requires the setpoints to be recieved for some time before it will allow the mode to be enabled, and will switch out of the mode if setpoints are no longer received.</p><p>The particular types of setpoints that are supported, if any, depend on the vehicle type and flight stack.</p><h2 id="message-enum-summary" tabindex="-1">Message/Enum Summary <a class="header-anchor" href="#message-enum-summary" aria-label="Permalink to &quot;Message/Enum Summary&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Message</th><th>Description</th></tr></thead><tbody><tr><td><a id="SET_POSITION_TARGET_LOCAL_NED"></a><a href="./../messages/common.html#SET_POSITION_TARGET_LOCAL_NED">SET_POSITION_TARGET_LOCAL_NED</a></td><td>Sets a desired vehicle position, velocity, and/or accelaration setpoint in a local north-east-down coordinate frame.</td></tr><tr><td><a id="SET_POSITION_TARGET_GLOBAL_INT"></a><a href="./../messages/common.html#SET_POSITION_TARGET_GLOBAL_INT">SET_POSITION_TARGET_GLOBAL_INT</a></td><td>Sets a desired vehicle position, velocity, and/or acceleration in a global coordinate system (WGS84)</td></tr><tr><td><a id="SET_ATTITUDE_TARGET"></a><a href="./../messages/common.html#SET_ATTITUDE_TARGET">SET_ATTITUDE_TARGET</a></td><td>Sets a desired vehicle attitude.</td></tr><tr><td><a id="POSITION_TARGET_LOCAL_NED"></a><a href="./../messages/common.html#POSITION_TARGET_LOCAL_NED">POSITION_TARGET_LOCAL_NED</a></td><td>Publishes current local NED target (set by <code>SET_POSITION_TARGET_LOCAL_NED</code>).</td></tr><tr><td><a id="POSITION_TARGET_GLOBAL_INT"></a><a href="./../messages/common.html#POSITION_TARGET_GLOBAL_INT">POSITION_TARGET_GLOBAL_INT</a></td><td>Publishes current global target (set by <code>SET_POSITION_TARGET_GLOBAL_INT</code>).</td></tr><tr><td><a id="ATTITUDE_TARGET"></a><a href="./../messages/common.html#ATTITUDE_TARGET">ATTITUDE_TARGET</a></td><td>Publishes current attitude target (set by <code>SET_ATTITUDE_TARGET</code>).</td></tr></tbody></table><table tabindex="0"><thead><tr><th>Enum</th><th>Description</th></tr></thead><tbody><tr><td><a id="MAV_PROTOCOL_CAPABILITY_SET_POSITION_TARGET_LOCAL_NED"></a><a href="./../messages/common.html#MAV_PROTOCOL_CAPABILITY_SET_POSITION_TARGET_LOCAL_NED">MAV_PROTOCOL_CAPABILITY_SET_POSITION_TARGET_LOCAL_NED</a></td><td>Flight stack supports SET_POSITION_TARGET_LOCAL_NED.</td></tr><tr><td><a id="MAV_PROTOCOL_CAPABILITY_SET_POSITION_TARGET_GLOBAL_INT"></a><a href="./../messages/common.html#MAV_PROTOCOL_CAPABILITY_SET_POSITION_TARGET_GLOBAL_INT">MAV_PROTOCOL_CAPABILITY_SET_POSITION_TARGET_GLOBAL_INT</a></td><td>Flight stack supports SET_POSITION_TARGET_LOCAL_NED.</td></tr><tr><td><a id="MAV_PROTOCOL_CAPABILITY_SET_ATTITUDE_TARGET"></a><a href="./../messages/common.html#MAV_PROTOCOL_CAPABILITY_SET_ATTITUDE_TARGET">MAV_PROTOCOL_CAPABILITY_SET_ATTITUDE_TARGET</a></td><td>Flight stack supports SET_ATTITUDE_TARGET.</td></tr></tbody></table><h2 id="feature-support" tabindex="-1">Feature support <a class="header-anchor" href="#feature-support" aria-label="Permalink to &quot;Feature support&quot;">​</a></h2><p>Test for setter message support by checking <a href="./../messages/common.html#AUTOPILOT_VERSION">AUTOPILOT_VERSION.capabilities</a> for the associated protocol bit: <a href="#MAV_PROTOCOL_CAPABILITY_SET_POSITION_TARGET_LOCAL_NED"><code>MAV_PROTOCOL_CAPABILITY_SET_POSITION_TARGET_LOCAL_NED</code></a>, <a href="#MAV_PROTOCOL_CAPABILITY_SET_POSITION_TARGET_GLOBAL_INT"><code>MAV_PROTOCOL_CAPABILITY_SET_POSITION_TARGET_GLOBAL_INT</code></a>, <a href="#MAV_PROTOCOL_CAPABILITY_SET_ATTITUDE_TARGET"><code>MAV_PROTOCOL_CAPABILITY_SET_ATTITUDE_TARGET</code></a>.</p><p>Note that support for the protocol/message does not imply that every vehicle will support every possible combination of parameters. This can only be inferred from the flight stack documentation.</p><h2 id="구현" tabindex="-1">구현 <a class="header-anchor" href="#구현" aria-label="Permalink to &quot;구현&quot;">​</a></h2><p>PX4 supports this protocol in <a href="https://docs.px4.io/main/en/flight_modes/offboard.html#mavlink-messages" target="_blank" rel="noreferrer">Offboard mode</a>. The allowed setpoints are documented at that link, and depend on the vehicle type.</p><p>ArduPilot supports this protocol in <a href="https://ardupilot.org/copter/docs/ac2_guidedmode.html" target="_blank" rel="noreferrer">Guided mode</a>. The supported messages for each vehicle type are covered in:</p><ul><li><a href="https://ardupilot.org/dev/docs/copter-commands-in-guided-mode.html" target="_blank" rel="noreferrer">Copter commands in guided mode</a></li><li><a href="https://ardupilot.org/dev/docs/plane-commands-in-guided-mode.html" target="_blank" rel="noreferrer">Plane commands in guided mode</a></li><li><a href="https://ardupilot.org/dev/docs/mavlink-rover-commands.html" target="_blank" rel="noreferrer">Rover commands in guided mode</a></li></ul>',15)]))}const A=t(T,[["render",s]]);export{O as __pageData,A as default};
