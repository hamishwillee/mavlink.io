import{_ as a,c as t,a8 as l,o as i}from"./chunks/framework.CnRC9NRC.js";const u=JSON.parse('{"title":"Dialect: all","description":"","frontmatter":{},"headers":[],"relativePath":"zh/messages/all.md","filePath":"zh/messages/all.md"}'),s={name:"zh/messages/all.md"};function n(r,e,o,m,d,h){return i(),t("div",null,e[0]||(e[0]=[l('<h1 id="dialect-all" tabindex="-1">Dialect: all <a class="header-anchor" href="#dialect-all" aria-label="Permalink to &quot;Dialect: all&quot;">​</a></h1><p>This dialect is intended to <code>include</code> all other <a href="./../messages/">dialects</a> in the <a href="https://github.com/mavlink/mavlink" target="_blank" rel="noreferrer">mavlink/mavlink</a> repository (including <a href="https://github.com/mavlink/mavlink/tree/master/external/dialects#mavlink-external-dialects" target="_blank" rel="noreferrer">external dialects</a>).</p><p>Dialects that are in <strong>all.xml</strong> are guaranteed to not have clashes in messages, enums, enum ids, and MAV_CMDs. This ensure that:</p><ul><li>Systems based on these dialects can co-exist on the same MAVLink network.</li><li>A Ground Station might (optionally) use libraries generated from <strong>all.xml</strong> to communicate using any of the dialects.</li></ul><blockquote><p><strong>Warning</strong></p><ul><li>New dialect files in the official repository must be added to <strong>all.xml</strong> and restrict themselves to using ids in their own allocated range.</li><li>Dialects should push changes to mavlink/mavlink in order to avoid potential clashes from changes to other dialects.</li></ul><p>A few older dialects are not included because these operate in completely closed networks or because they are only used for tests.</p></blockquote><p>This topic is a human-readable form of the XML definition file: <a href="https://github.com/mavlink/mavlink/blob/master/message_definitions/v1.0/all.xml" target="_blank" rel="noreferrer">all.xml</a>.</p><p><span id="mav2_extension_field"></span></p><blockquote><p><strong>Note</strong></p><ul><li>MAVLink 2 <a href="./../guide/define_xml_element.html#message_extensions">extension fields</a> are displayed in blue.</li><li>Entities from dialects are displayed only as headings (with link to original)</li></ul></blockquote><h2 id="mavlink-include-files" tabindex="-1">MAVLink Include Files <a class="header-anchor" href="#mavlink-include-files" aria-label="Permalink to &quot;MAVLink Include Files&quot;">​</a></h2><ul><li><a href="./../messages/ardupilotmega.html">ardupilotmega.xml</a></li><li><a href="./../messages/ASLUAV.html">ASLUAV.xml</a></li><li><a href="./../messages/common.html">common.xml</a></li><li><a href="./../messages/development.html">development.xml</a></li><li><a href="./../messages/icarous.html">icarous.xml</a></li><li><a href="./../messages/minimal.html">minimal.xml</a></li><li><a href="./../messages/python_array_test.html">python_array_test.xml</a></li><li><a href="./../messages/standard.html">standard.xml</a></li><li><a href="./../messages/test.html">test.xml</a></li><li><a href="./../messages/ualberta.html">ualberta.xml</a></li><li><a href="./../messages/uAvionix.html">uAvionix.xml</a></li><li><a href="./../messages/storm32.html">storm32.xml</a></li><li><a href="./../messages/AVSSUAS.html">AVSSUAS.xml</a></li><li><a href="./../messages/cubepilot.html">cubepilot.xml</a></li><li><a href="./../messages/csAirLink.html">csAirLink.xml</a></li></ul><h2 id="概览" tabindex="-1">概览 <a class="header-anchor" href="#概览" aria-label="Permalink to &quot;概览&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Defined</th><th>Included</th></tr></thead><tbody><tr><td><a href="#messages">Messages</a></td><td>0</td><td>364</td></tr><tr><td><a href="#enumerated-types">Enums</a></td><td>0</td><td>235</td></tr><tr><td><a href="#mav_commands">Commands</a></td><td>216</td><td>0</td></tr></tbody></table><p>The following sections list all entities in the dialect (both included and defined in this file).</p><h2 id="消息" tabindex="-1">消息 <a class="header-anchor" href="#消息" aria-label="Permalink to &quot;消息&quot;">​</a></h2><h2 id="enumerated-types" tabindex="-1">Enumerated Types <a class="header-anchor" href="#enumerated-types" aria-label="Permalink to &quot;Enumerated Types&quot;">​</a></h2><h2 id="mav_commands" tabindex="-1">Commands (MAV_CMD) <a class="header-anchor" href="#mav_commands" aria-label="Permalink to &quot;Commands (MAV_CMD) {#mav_commands}&quot;">​</a></h2>',16)]))}const f=a(s,[["render",n]]);export{u as __pageData,f as default};
