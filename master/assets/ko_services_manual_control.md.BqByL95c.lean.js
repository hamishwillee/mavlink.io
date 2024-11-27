import{_ as t,c as o,a8 as a,o as r}from"./chunks/framework.CnRC9NRC.js";const p=JSON.parse('{"title":"Manual Control Protocol (Joystick)","description":"","frontmatter":{},"headers":[],"relativePath":"ko/services/manual_control.md","filePath":"ko/services/manual_control.md"}'),n={name:"ko/services/manual_control.md"};function i(d,e,l,s,c,h){return r(),o("div",null,e[0]||(e[0]=[a('<h1 id="manual-control-protocol-joystick" tabindex="-1">Manual Control Protocol (Joystick) <a class="header-anchor" href="#manual-control-protocol-joystick" aria-label="Permalink to &quot;Manual Control Protocol (Joystick)&quot;">​</a></h1><p>The Manual Control Protocol enables controlling a system using a &quot;standard joystick&quot; (or joystick-like input device that supports the same axes nomenclature).</p><p>The protocol is implemented with just the <a href="./../messages/common.html#MANUAL_CONTROL"><code>MANUAL_CONTROL</code></a> message. It defines the <code>target</code> system to be controlled, the movement in four primary axes (<code>x</code>, <code>y</code>, <code>z</code>, <code>r</code>) and two extension axes (<code>s</code>, <code>t</code>), and two 16-bit fields to represent the states of up to 32 buttons (<code>buttons</code>, <code>buttons2</code>). Unused axes can be disabled, and the extension axes must be explicitly enabled using bits 0 and 1 of the <code>enabled_extensions</code> field.</p><p>The protocol is by intent relatively simple and abstract, and provides a simple way of controlling the main motion of a vehicle, along with several arbitrary features that can be triggered using buttons.</p><p>This allows GCS software to provide a simple level of control for many types of vehicles, and allows new vehicle types with unusual functions to operate with minimal (if any) changes to the MAVLink protocol or existing ground control station (GCS) software.</p><h2 id="mapping-axes" tabindex="-1">Mapping Axes <a class="header-anchor" href="#mapping-axes" aria-label="Permalink to &quot;Mapping Axes&quot;">​</a></h2><p>Manual control is performed in the vehicle-frame. All axis values are normalised to the range -1000 to 1000.</p><h3 id="rotation-focused-control" tabindex="-1">Rotation-Focused Control <a class="header-anchor" href="#rotation-focused-control" aria-label="Permalink to &quot;Rotation-Focused Control&quot;">​</a></h3><p>The typical axis assignments for a thrust- and rotation-controlled vehicle (e.g. planes, multicopters) are listed below.</p><table tabindex="0"><thead><tr><th>field</th><th>motion axis</th><th>+ve direction</th><th>-ve direction</th></tr></thead><tbody><tr><td><code>x</code></td><td>pitch</td><td>forward/nose-down</td><td>backward/nose-up</td></tr><tr><td><code>y</code></td><td>roll</td><td>right-down</td><td>left-down</td></tr><tr><td><code>z</code></td><td>thrust</td><td>positive</td><td>negative</td></tr><tr><td><code>r</code></td><td>yaw</td><td>counter-clockwise</td><td>clockwise</td></tr></tbody></table><h3 id="directional-control" tabindex="-1">Directional Control <a class="header-anchor" href="#directional-control" aria-label="Permalink to &quot;Directional Control&quot;">​</a></h3><p>Vehicles with direct control over vehicle translation directions (multicopters) typically use the following mappings.</p><table tabindex="0"><thead><tr><th>field</th><th>motion axis</th><th>+ve direction</th><th>-ve direction</th></tr></thead><tbody><tr><td><code>x</code></td><td>forward</td><td>forward</td><td>backward</td></tr><tr><td><code>y</code></td><td>lateral</td><td>right</td><td>left</td></tr><tr><td><code>z</code></td><td>vertical</td><td>up</td><td>down</td></tr><tr><td><code>r</code></td><td>yaw</td><td>counter-clockwise</td><td>clockwise</td></tr><tr><td><code>s</code></td><td>pitch</td><td>forward/nose-down</td><td>backward/nose-up</td></tr><tr><td><code>t</code></td><td>roll</td><td>right-down</td><td>left-down</td></tr></tbody></table><h2 id="mapping-buttons" tabindex="-1">Mapping Buttons <a class="header-anchor" href="#mapping-buttons" aria-label="Permalink to &quot;Mapping Buttons&quot;">​</a></h2><p>Button functions are vehicle/flight-stack dependent:</p><ul><li>ArduPilot treats button values as user-configurable using firmware parameters (e.g. ArduCopter&#39;s <a href="https://ardupilot.org/copter/docs/parameters.html#btn-func1-button-pin-1-rc-channel-function" target="_blank" rel="noreferrer"><code>BTN_FUNCn</code></a> or ArduSub&#39;s <a href="https://www.ardusub.com/developers/full-parameter-list.html#btnnfunction-function-for-button" target="_blank" rel="noreferrer"><code>BTNn_FUNCTION</code></a>), through the <a href="./parameter.html">Parameter</a> or <a href="./parameter_ext.html">Extended Parameter</a> protocols.</li><li>PX4 defines fixed meanings to some of the <code>buttons</code> values, and these are mapped to user-selected functions by the ground station.</li></ul><p>The <code>buttons</code> field is required, and corresponds to the first 16 buttons.</p><p><code>buttons2</code> is an <a href="https://mavlink.io/en/guide/define_xml_element.html#message_extensions" target="_blank" rel="noreferrer">extension</a>, and corresponds to the optional second set of 16 buttons.</p><h2 id="alternatives" tabindex="-1">Alternatives <a class="header-anchor" href="#alternatives" aria-label="Permalink to &quot;Alternatives&quot;">​</a></h2><p>Vehicles may alternatively be controlled by sending information as a set of up to 18 channel values using <a href="./../messages/common.html#RC_CHANNELS_OVERRIDE"><code>RC_CHANNELS_OVERRIDE</code></a>. Channels can be mapped to firmware parameters using <a href="./../messages/common.html#PARAM_MAP_RC"><code>PARAM_MAP_RC</code></a>, and the autopilot can use the current parameter values at each point in time to determine control actions.</p><p>It&#39;s worth noting that the generality of RC channels control is a double-edged sword. It is incredibly versatile, and can be used to provide support for several arbitrary control axes, but the user-defined in-vehicle nature of the mapped parameters means additional setup is frequently required for compatibility with GCSs, and there are no guarantees that multiple vehicles running the same firmware will have the same channel-parameter mapping. This is a similar issue to the <code>MANUAL_CONTROL</code> buttons, so to minimise firmware complexity and maximise interoperability between a vehicle type and GCSs it&#39;s recommended to use targetted MAVLink commands where possible.</p><h2 id="구현" tabindex="-1">구현 <a class="header-anchor" href="#구현" aria-label="Permalink to &quot;구현&quot;">​</a></h2><p>The protocol has been implemented in various GCSs and vehicle firmwares. These implementations can be used in your own code within the terms of their software licenses.</p><h3 id="ground-control-stations" tabindex="-1">Ground Control Stations <a class="header-anchor" href="#ground-control-stations" aria-label="Permalink to &quot;Ground Control Stations&quot;">​</a></h3><p>The protocol has been implemented in <em>QGroundControl</em> and <em>Mission Planner</em>.</p><p><em>QGroundControl</em> implementation:</p><ul><li><a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/Joystick/Joystick.cc" target="_blank" rel="noreferrer">src/Joystick/Joystick.cc</a> (in <code>_handleAxis</code> method)</li></ul><p><em>MissionPlanner</em> implementation:</p><ul><li><a href="https://github.com/ArduPilot/MissionPlanner/blob/master/MainV2.cs" target="_blank" rel="noreferrer">MainV2.cs</a> (in <code>joysticksend</code> method)</li></ul><h3 id="vehicle-firmwares" tabindex="-1">Vehicle Firmwares <a class="header-anchor" href="#vehicle-firmwares" aria-label="Permalink to &quot;Vehicle Firmwares&quot;">​</a></h3><p>The protocol has been implemented in PX4, and in the Copter, Plane, Rover, and Sub vehicle firmwares in ArduPilot.</p><p>PX4 Implementation:</p><ul><li><a href="https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_receiver.cpp" target="_blank" rel="noreferrer">mavlink_receiver.cpp</a> (in <code>handle_message_manual_control</code> method)</li></ul><p>ArduPilot Implementations:</p><ul><li><a href="https://github.com/ArduPilot/ardupilot/blob/master/ArduCopter/GCS_Mavlink.cpp" target="_blank" rel="noreferrer">ArduCopter/GCS_Mavlink.cpp</a> (in <code>handleMessage</code> method)</li><li><a href="https://github.com/ArduPilot/ardupilot/blob/master/ArduPlane/GCS_Mavlink.cpp" target="_blank" rel="noreferrer">ArduPlane/GCS_Mavlink.cpp</a> (in <code>handleMessage</code> method)</li><li><a href="https://github.com/ArduPilot/ardupilot/blob/master/ArduRover/GCS_Mavlink.cpp" target="_blank" rel="noreferrer">ArduRover/GCS_Mavlink.cpp</a> (in <code>handle_manual_control</code> method)</li><li><a href="https://github.com/ArduPilot/ardupilot/blob/master/ArduSub/joystick.cpp" target="_blank" rel="noreferrer">ArduSub/joystick.cpp</a> (in <code>transform_manual_control_to_rc_override</code> method)</li></ul><h2 id="future-extensions" tabindex="-1">Future Extensions <a class="header-anchor" href="#future-extensions" aria-label="Permalink to &quot;Future Extensions&quot;">​</a></h2><p>Future extensions are likely to be handled with additional targetted <a href="./command.html">MAVLink commands</a> rather than mapping functionality in the flight controller (i.e. handling more complex inputs in the GCS to reduce vehicle firmware complexity).</p>',37)]))}const m=t(n,[["render",i]]);export{p as __pageData,m as default};
