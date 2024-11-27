import{_ as e,c as a,a8 as d,o as _}from"./chunks/framework.CnRC9NRC.js";const R=JSON.parse('{"title":"Dialect: csAirLink","description":"","frontmatter":{},"headers":[],"relativePath":"ko/messages/csAirLink.md","filePath":"ko/messages/csAirLink.md"}'),r={name:"ko/messages/csAirLink.md"};function i(I,t,h,o,E,n){return _(),a("div",null,t[0]||(t[0]=[d('<h1 id="dialect-csairlink" tabindex="-1">Dialect: csAirLink <a class="header-anchor" href="#dialect-csairlink" aria-label="Permalink to &quot;Dialect: csAirLink&quot;">​</a></h1><blockquote><p><strong>Warning</strong> This topic documents the version of the dialect file in the <a href="https://github.com/mavlink/mavlink" target="_blank" rel="noreferrer">mavlink/mavlink</a> Github repository, which may not be up to date with the file in the source repository (it is up to the dialect owner to push changes when needed). The source repo should be listed in the comments at the top of the XML definition file listed below (but may not be).</p></blockquote><p>This topic is a human-readable form of the XML definition file: <a href="https://github.com/mavlink/mavlink/blob/master/message_definitions/v1.0/csAirLink.xml" target="_blank" rel="noreferrer">csAirLink.xml</a>.</p><p><span id="mav2_extension_field"></span></p><blockquote><p><strong>Note</strong></p><ul><li>MAVLink 2 <a href="./../guide/define_xml_element.html#message_extensions">extension fields</a> are displayed in blue.</li><li>Entities from dialects are displayed only as headings (with link to original)</li></ul></blockquote><p><strong>Protocol version:</strong> 3</p><h2 id="mavlink-include-files" tabindex="-1">MAVLink Include Files <a class="header-anchor" href="#mavlink-include-files" aria-label="Permalink to &quot;MAVLink Include Files&quot;">​</a></h2><p>None</p><h2 id="목차" tabindex="-1">목차 <a class="header-anchor" href="#목차" aria-label="Permalink to &quot;목차&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Defined</th><th>Included</th></tr></thead><tbody><tr><td><a href="#messages">Messages</a></td><td>6</td><td>0</td></tr><tr><td><a href="#enumerated-types">Enums</a></td><td>5</td><td>0</td></tr><tr><td>Commands</td><td>0</td><td>0</td></tr></tbody></table><p>The following sections list all entities in the dialect (both included and defined in this file).</p><h2 id="messages" tabindex="-1">Messages <a class="header-anchor" href="#messages" aria-label="Permalink to &quot;Messages&quot;">​</a></h2><h3 id="AIRLINK_AUTH" tabindex="-1">AIRLINK_AUTH (52000) <a class="header-anchor" href="#AIRLINK_AUTH" aria-label="Permalink to &quot;AIRLINK_AUTH (52000) {#AIRLINK_AUTH}&quot;">​</a></h3><p>Authorization package</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>login</td><td><code>char[50]</code></td><td>Login</td></tr><tr><td>password</td><td><code>char[50]</code></td><td>Password</td></tr></tbody></table><h3 id="AIRLINK_AUTH_RESPONSE" tabindex="-1">AIRLINK_AUTH_RESPONSE (52001) <a class="header-anchor" href="#AIRLINK_AUTH_RESPONSE" aria-label="Permalink to &quot;AIRLINK_AUTH_RESPONSE (52001) {#AIRLINK_AUTH_RESPONSE}&quot;">​</a></h3><p>Response to the authorization request</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Values</th><th>Description</th></tr></thead><tbody><tr><td>resp_type</td><td><code>uint8_t</code></td><td><a href="#AIRLINK_AUTH_RESPONSE_TYPE">AIRLINK_AUTH_RESPONSE_TYPE</a></td><td>Response type</td></tr></tbody></table><h3 id="AIRLINK_EYE_GS_HOLE_PUSH_REQUEST" tabindex="-1">AIRLINK_EYE_GS_HOLE_PUSH_REQUEST (52002) <a class="header-anchor" href="#AIRLINK_EYE_GS_HOLE_PUSH_REQUEST" aria-label="Permalink to &quot;AIRLINK_EYE_GS_HOLE_PUSH_REQUEST (52002) {#AIRLINK_EYE_GS_HOLE_PUSH_REQUEST}&quot;">​</a></h3><p>Request to hole punching</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Values</th><th>Description</th></tr></thead><tbody><tr><td>resp_type</td><td><code>uint8_t</code></td><td><a href="#AIRLINK_EYE_GS_HOLE_PUSH_RESP_TYPE">AIRLINK_EYE_GS_HOLE_PUSH_RESP_TYPE</a></td><td>Hole push response type</td></tr></tbody></table><h3 id="AIRLINK_EYE_GS_HOLE_PUSH_RESPONSE" tabindex="-1">AIRLINK_EYE_GS_HOLE_PUSH_RESPONSE (52003) <a class="header-anchor" href="#AIRLINK_EYE_GS_HOLE_PUSH_RESPONSE" aria-label="Permalink to &quot;AIRLINK_EYE_GS_HOLE_PUSH_RESPONSE (52003) {#AIRLINK_EYE_GS_HOLE_PUSH_RESPONSE}&quot;">​</a></h3><p>Response information about the connected device</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Values</th><th>Description</th></tr></thead><tbody><tr><td>resp_type</td><td><code>uint8_t</code></td><td><a href="#AIRLINK_EYE_GS_HOLE_PUSH_RESP_TYPE">AIRLINK_EYE_GS_HOLE_PUSH_RESP_TYPE</a></td><td>Hole push response type</td></tr><tr><td>ip_version</td><td><code>uint8_t</code></td><td><a href="#AIRLINK_EYE_IP_VERSION">AIRLINK_EYE_IP_VERSION</a></td><td>ip version</td></tr><tr><td>ip_address_4</td><td><code>uint8_t[4]</code></td><td></td><td>ip 4 address</td></tr><tr><td>ip_address_6</td><td><code>uint8_t[16]</code></td><td></td><td>ip 6 address</td></tr><tr><td>ip_port</td><td><code>uint32_t</code></td><td></td><td>port</td></tr></tbody></table><h3 id="AIRLINK_EYE_HP" tabindex="-1">AIRLINK_EYE_HP (52004) <a class="header-anchor" href="#AIRLINK_EYE_HP" aria-label="Permalink to &quot;AIRLINK_EYE_HP (52004) {#AIRLINK_EYE_HP}&quot;">​</a></h3><p>A package with information about the hole punching status. It is used for constant sending to avoid NAT closing timeout.</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Values</th><th>Description</th></tr></thead><tbody><tr><td>resp_type</td><td><code>uint8_t</code></td><td><a href="#AIRLINK_EYE_HOLE_PUSH_TYPE">AIRLINK_EYE_HOLE_PUSH_TYPE</a></td><td>Hole push response type</td></tr></tbody></table><h3 id="AIRLINK_EYE_TURN_INIT" tabindex="-1">AIRLINK_EYE_TURN_INIT (52005) <a class="header-anchor" href="#AIRLINK_EYE_TURN_INIT" aria-label="Permalink to &quot;AIRLINK_EYE_TURN_INIT (52005) {#AIRLINK_EYE_TURN_INIT}&quot;">​</a></h3><p>Initializing the TURN protocol</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Values</th><th>Description</th></tr></thead><tbody><tr><td>resp_type</td><td><code>uint8_t</code></td><td><a href="#AIRLINK_EYE_TURN_INIT_TYPE">AIRLINK_EYE_TURN_INIT_TYPE</a></td><td>Turn init type</td></tr></tbody></table><h2 id="enumerated-types" tabindex="-1">Enumerated Types <a class="header-anchor" href="#enumerated-types" aria-label="Permalink to &quot;Enumerated Types&quot;">​</a></h2><h3 id="AIRLINK_AUTH_RESPONSE_TYPE" tabindex="-1">AIRLINK_AUTH_RESPONSE_TYPE <a class="header-anchor" href="#AIRLINK_AUTH_RESPONSE_TYPE" aria-label="Permalink to &quot;AIRLINK_AUTH_RESPONSE_TYPE {#AIRLINK_AUTH_RESPONSE_TYPE}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Value</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a id="AIRLINK_ERROR_LOGIN_OR_PASS"></a>0</td><td><a href="#AIRLINK_ERROR_LOGIN_OR_PASS">AIRLINK_ERROR_LOGIN_OR_PASS</a></td><td>Login or password error</td></tr><tr><td><a id="AIRLINK_AUTH_OK"></a>1</td><td><a href="#AIRLINK_AUTH_OK">AIRLINK_AUTH_OK</a></td><td>Auth successful</td></tr></tbody></table><h3 id="AIRLINK_EYE_GS_HOLE_PUSH_RESP_TYPE" tabindex="-1">AIRLINK_EYE_GS_HOLE_PUSH_RESP_TYPE <a class="header-anchor" href="#AIRLINK_EYE_GS_HOLE_PUSH_RESP_TYPE" aria-label="Permalink to &quot;AIRLINK_EYE_GS_HOLE_PUSH_RESP_TYPE {#AIRLINK_EYE_GS_HOLE_PUSH_RESP_TYPE}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Value</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a id="AIRLINK_HPR_PARTNER_NOT_READY"></a>0</td><td><a href="#AIRLINK_HPR_PARTNER_NOT_READY">AIRLINK_HPR_PARTNER_NOT_READY</a></td><td></td></tr><tr><td><a id="AIRLINK_HPR_PARTNER_READY"></a>1</td><td><a href="#AIRLINK_HPR_PARTNER_READY">AIRLINK_HPR_PARTNER_READY</a></td><td></td></tr></tbody></table><h3 id="AIRLINK_EYE_IP_VERSION" tabindex="-1">AIRLINK_EYE_IP_VERSION <a class="header-anchor" href="#AIRLINK_EYE_IP_VERSION" aria-label="Permalink to &quot;AIRLINK_EYE_IP_VERSION {#AIRLINK_EYE_IP_VERSION}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Value</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a id="AIRLINK_IP_V4"></a>0</td><td><a href="#AIRLINK_IP_V4">AIRLINK_IP_V4</a></td><td></td></tr><tr><td><a id="AIRLINK_IP_V6"></a>1</td><td><a href="#AIRLINK_IP_V6">AIRLINK_IP_V6</a></td><td></td></tr></tbody></table><h3 id="AIRLINK_EYE_HOLE_PUSH_TYPE" tabindex="-1">AIRLINK_EYE_HOLE_PUSH_TYPE <a class="header-anchor" href="#AIRLINK_EYE_HOLE_PUSH_TYPE" aria-label="Permalink to &quot;AIRLINK_EYE_HOLE_PUSH_TYPE {#AIRLINK_EYE_HOLE_PUSH_TYPE}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Value</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a id="AIRLINK_HP_NOT_PENETRATED"></a>0</td><td><a href="#AIRLINK_HP_NOT_PENETRATED">AIRLINK_HP_NOT_PENETRATED</a></td><td></td></tr><tr><td><a id="AIRLINK_HP_BROKEN"></a>1</td><td><a href="#AIRLINK_HP_BROKEN">AIRLINK_HP_BROKEN</a></td><td></td></tr></tbody></table><h3 id="AIRLINK_EYE_TURN_INIT_TYPE" tabindex="-1">AIRLINK_EYE_TURN_INIT_TYPE <a class="header-anchor" href="#AIRLINK_EYE_TURN_INIT_TYPE" aria-label="Permalink to &quot;AIRLINK_EYE_TURN_INIT_TYPE {#AIRLINK_EYE_TURN_INIT_TYPE}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Value</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a id="AIRLINK_TURN_INIT_START"></a>0</td><td><a href="#AIRLINK_TURN_INIT_START">AIRLINK_TURN_INIT_START</a></td><td></td></tr><tr><td><a id="AIRLINK_TURN_INIT_OK"></a>1</td><td><a href="#AIRLINK_TURN_INIT_OK">AIRLINK_TURN_INIT_OK</a></td><td></td></tr><tr><td><a id="AIRLINK_TURN_INIT_BAD"></a>2</td><td><a href="#AIRLINK_TURN_INIT_BAD">AIRLINK_TURN_INIT_BAD</a></td><td></td></tr></tbody></table>',41)]))}const N=e(r,[["render",i]]);export{R as __pageData,N as default};
