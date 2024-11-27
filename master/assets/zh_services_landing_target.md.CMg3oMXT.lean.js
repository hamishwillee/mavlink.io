import{_ as e}from"./chunks/landing_target_definitions.CL9VJLbL.js";import{_ as a,c as o,a8 as d,o as i}from"./chunks/framework.CnRC9NRC.js";const f=JSON.parse('{"title":"Landing Target Protocol","description":"","frontmatter":{},"headers":[],"relativePath":"zh/services/landing_target.md","filePath":"zh/services/landing_target.md"}'),r={name:"zh/services/landing_target.md"};function n(s,t,l,h,c,m){return i(),o("div",null,t[0]||(t[0]=[d('<h1 id="landing-target-protocol" tabindex="-1">Landing Target Protocol <a class="header-anchor" href="#landing-target-protocol" aria-label="Permalink to &quot;Landing Target Protocol&quot;">​</a></h1><p>着陆目标服务/信息从MAVLink定位系统向自动驾驶仪传达一个或多个目标的位置。 着陆目标服务/信息从MAVLink定位系统向自动驾驶仪传达一个或多个目标的位置。 一个多旋翼机或VTOL系统可以使用该信息来着陆，其定位精度远远高于传统GPS提供的定位精度(GPS提供几米内的位置，而着陆目标系统可能合理地提供厘米级的精确着陆)。</p><p>定位系统通常由机载另一台计算机和视觉系统组成，能够探测到光信标或目标图像。 还支持无线电信标和不同类型的可视标记和标记。</p><h2 id="protocol-messages" tabindex="-1">Protocol Messages <a class="header-anchor" href="#protocol-messages" aria-label="Permalink to &quot;Protocol Messages&quot;">​</a></h2><p>The message used by this protocol is <a href="./../messages/common.html#LANDING_TARGET">LANDING_TARGET</a>. This is <em>broadcast</em> by the positioning system to indicate the position of a particular target at a particular time.</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>The required broadcast rate depends on the landing speed and desired accuracy; start with rates between 10 Hz and 50 Hz and tune performance as needed.</p></div><p>The original MAVLink 1 message was designed with the assumption that the target is captured from a downward facing camera, and provides fields that are relative to the captured image. MAVLink 2 extended the message to provide positional information in terms of standard frames (<a href="./../messages/common.html#MAV_FRAME">MAV_FRAME</a>), a quaternion and the type of landing targets (<a href="./../messages/common.html#LANDING_TARGET_TYPE">LANDING_TARGET_TYPE</a>). This allows more flexibility for the types of target that can be supported, simplifies the code required by the autopilot, and allows the autopilot to control both landing position and orientation on (some) targets.</p><p>Different systems may support either (or presumably both) sets of fields. These are discussed below.</p><h2 id="camera_image_relative" tabindex="-1">Target Relative to Captured Image <a class="header-anchor" href="#camera_image_relative" aria-label="Permalink to &quot;Target Relative to Captured Image {#camera_image_relative}&quot;">​</a></h2><p>The <a href="./../messages/common.html#LANDING_TARGET">LANDING_TARGET</a> fields that are relative to a captured image are shown below:</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Units</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>angle_x</td><td>float</td><td>rad</td><td></td><td>X-axis angular offset of the target from the center of the image</td></tr><tr><td>angle_y</td><td>float</td><td>rad</td><td></td><td>Y-axis angular offset of the target from the center of the image</td></tr><tr><td>distance</td><td>float</td><td>m</td><td></td><td>Distance to the target from the vehicle</td></tr><tr><td>size_x</td><td>float</td><td>rad</td><td></td><td>Size of target along x-axis</td></tr><tr><td>size_y</td><td>float</td><td>rad</td><td></td><td>Size of target along y-axis</td></tr></tbody></table><p>The positional information can be interpreted as described below.</p><p>Imagine a ray pointing from the camera&#39;s principal point to the target. The x angle (<code>angle_x</code>) is the angle spanned by that ray and the x-axis of the image plane. The same holds for the y angle (<code>angle_y</code>). In other words, the x angle is a function of the x pixel coordinate of the target (denoted by <em>u̅</em> in the image below), the y angle is a function of the y pixel coordinate (denoted <em>v</em> in the image below). Using the angle rather than <em>u̅/v̅</em> pixel coordinates has the advantage that the effect of the camera lens is already accounted for. Using the angle rather than <em>u̅/v̅</em> pixel coordinates has the advantage that the effect of the camera lens is already accounted for.</p><p><img src="'+e+'" alt="Landing Target Fields"></p><p>The sizes in x and y direction are analogous (<code>size_x</code>/<code>size_y</code>). They describe the angle between the smallest and biggest pixel in x/y direction respectively of the target as seen in the image.</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>ArduPilot supports messages with these fields if position_valid is <code>0</code>.</p></div><h2 id="positional" tabindex="-1">Target as Position/Quaternion (MAVLink 2 and later) <a class="header-anchor" href="#positional" aria-label="Permalink to &quot;Target as Position/Quaternion (MAVLink 2 and later) {#positional}&quot;">​</a></h2><p>The message fields that are used to provide target information as a position/quaternion are shown below. Field meaning and use is clear from the description.</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Units</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>frame</td><td>uint8_t</td><td></td><td><a href="./../messages/common.html#MAV_FRAME">MAV_FRAME</a></td><td>Coordinate frame used for following fields.</td></tr><tr><td>x</td><td>float</td><td>m</td><td></td><td>X Position of the landing target in <code>MAV_FRAME</code></td></tr><tr><td>y</td><td>float</td><td>m</td><td></td><td>Y Position of the landing target in <code>MAV_FRAME</code></td></tr><tr><td>z</td><td>float</td><td>m</td><td></td><td>Z Position of the landing target in <code>MAV_FRAME</code></td></tr><tr><td>q</td><td>float[4]</td><td></td><td></td><td>Quaternion of landing target orientation (w, x, y, z order, zero-rotation is 1, 0, 0, 0)</td></tr><tr><td>type</td><td>uint8_t</td><td></td><td><a href="./../messages/common.html#LANDING_TARGET_TYPE">LANDING_TARGET_TYPE</a></td><td>Type of landing target</td></tr><tr><td>position_valid</td><td>uint8_t</td><td></td><td></td><td>Boolean indicating whether these position field values are populated with valid position target information (1: valid, 0: invalid). The default is &#39;0&#39;, so that if the fields are not populated the default-zero values are not interpreted as a valid target position.</td></tr></tbody></table><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ul><li>PX4 supports this form of positioning in <a href="./../messages/common.html#MAV_FRAME_LOCAL_NED">MAV_FRAME_LOCAL_NED</a> (only).&gt; The original (MAVLink 1) fields are ignored.</li><li>ArduPilot supports this form of positioning in <a href="./../messages/common.html#MAV_FRAME_BODY_FRD">MAV_FRAME_BODY_FRD</a> (only). <code>position_valid</code> must be <code>1</code> and <code>distance</code> must be filled.</li></ul></div>',20)]))}const u=a(r,[["render",n]]);export{f as __pageData,u as default};
