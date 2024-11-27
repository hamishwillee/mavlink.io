import{_ as t,c as a,a8 as o,o as i}from"./chunks/framework.CnRC9NRC.js";const p=JSON.parse('{"title":"Component Metadata Protocol (WIP)","description":"","frontmatter":{},"headers":[],"relativePath":"ko/services/component_information.md","filePath":"ko/services/component_information.md"}'),s={name:"ko/services/component_information.md"};function n(r,e,l,d,h,c){return i(),a("div",null,e[0]||(e[0]=[o(`<h1 id="component-metadata-protocol-wip" tabindex="-1">Component Metadata Protocol (WIP) <a class="header-anchor" href="#component-metadata-protocol-wip" aria-label="Permalink to &quot;Component Metadata Protocol (WIP)&quot;">​</a></h1><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>This service is still marked as &quot;work in progress&quot;, and should not be relied upon in production. It has also evolved since first created as the &quot;Component Information Protocol&quot;.</p></div><p>The <em>Component Metadata Protocol</em> is a MAVLink service for requesting metadata from (and about) MAVLink components. It is intended to provide autopilot- and version- independent feature discovery and configuration, allowing a GCS to configure its UI and/or a device without knowing anything about the connected system.</p><p>Information shared using this service may include:</p><ul><li>What types of component information are supported (by this component).</li><li>What MAVLink commands are supported (both in missions and in other modes).</li><li>Parameter metadata for parameters supported by the vehicle.</li><li>Metadata about events emitted by the system</li><li>Self-describing configuration UIs (i.e. similar to MAVLink camera configuration files).</li><li>Translations of other metadata.</li></ul><p>Component metadata is specified in <a href="#schema_files">appropriately formatted JSON files</a> (which may be <a href="#file-compression"><strong>.xz</strong> compressed</a>). The component metadata protocol is used to request the location of the <a href="#COMP_METADATA_TYPE_GENERAL">general metadata file</a> file, which is then parsed to get the location of other <a href="#schema_files">metadata files</a> supported by the component.</p><p>Information supplied by the service is assumed to be invariant after boot. There is no mechanism, for example, to provide an update if the set of supported parameters was to change after boot.</p><h2 id="message-enum-summary" tabindex="-1">Message/Enum Summary <a class="header-anchor" href="#message-enum-summary" aria-label="Permalink to &quot;Message/Enum Summary&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Message</th><th>Description</th></tr></thead><tbody><tr><td><a id="COMPONENT_METADATA"></a><a href="./../messages/common.html#COMPONENT_METADATA">COMPONENT_METADATA</a></td><td>Message providing a download url and <a href="#metadata-caching-crc">CRC</a> for the <a href="#COMP_METADATA_TYPE_GENERAL">general metadata</a> component information file. The message is requested using <a href="#MAV_CMD_REQUEST_MESSAGE">MAV_CMD_REQUEST_MESSAGE</a>.</td></tr><tr><td><a id="MAV_CMD_REQUEST_MESSAGE"></a><a href="./../messages/common.html#MAV_CMD_REQUEST_MESSAGE">MAV_CMD_REQUEST_MESSAGE</a></td><td>Use this command to request that a component emit <a href="#COMPONENT_METADATA">COMPONENT_METADATA</a>. Use <code>param1=397</code> (the message id of <code>COMPONENT_METADATA</code>).</td></tr></tbody></table><table tabindex="0"><thead><tr><th>Enum</th><th>Description</th></tr></thead><tbody><tr><td><a id="COMP_METADATA_TYPE"></a><a href="./../messages/common.html#COMP_METADATA_TYPE">COMP_METADATA_TYPE</a></td><td>Types of component metadata supported by the protocol - e.g. general information, parameter metadata, supported commands, events, peripherals, etc. The type identifiers are used in the &quot;general&quot; metadata file to identify the sections that provide information about each supported type of metadata.</td></tr></tbody></table><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p><a href="./../messages/common.html#COMPONENT_INFORMATION">COMPONENT_INFORMATION</a> is not used by thie service (it is a deprecated legacy version of <a href="./../messages/common.html#COMPONENT_METADATA">COMPONENT_METADATA</a>).</p></div><h2 id="schema_files" tabindex="-1">Component Information File Format (Schema) <a class="header-anchor" href="#schema_files" aria-label="Permalink to &quot;Component Information File Format (Schema) {#schema_files}&quot;">​</a></h2><p>Component information files are written in JSON and must conform to the schema definitions found in the folder <a href="https://github.com/mavlink/mavlink/tree/master/component_metadata" target="_blank" rel="noreferrer">/component_metadata</a>. The component information file types and schema are (at time of writing):</p><table tabindex="0"><thead><tr><th>Type</th><th>Type Id</th><th>Schema</th><th>Description</th></tr></thead><tbody><tr><td><a id="COMP_METADATA_TYPE_GENERAL"></a>General metadata</td><td><a href="./../messages/common.html#COMP_METADATA_TYPE_GENERAL">COMP_METADATA_TYPE_GENERAL</a></td><td><a href="https://github.com/mavlink/mavlink/blob/master/component_metadata/general.schema.json" target="_blank" rel="noreferrer">general.schema.json</a></td><td>General information about the component including hardware/firmware vendor version. This metadata includes information about all the other metadata types are supported by the component and where their metadata files are located. This metadata type must be supported if this protocol is supported and the file must be present on vehicle and delivered by MAVLink FTP. Note however that you never actually need to specify this type!</td></tr><tr><td><a id="COMP_METADATA_TYPE_PARAMETER"></a>Parameter metadata</td><td><a href="./../messages/common.html#COMP_METADATA_TYPE_PARAMETER">COMP_METADATA_TYPE_PARAMETER</a></td><td><a href="https://github.com/mavlink/mavlink/blob/master/component_metadata/parameter.schema.json" target="_blank" rel="noreferrer">parameter.schema.json</a></td><td>Information about parameters supported by the vehicle (on boot).</td></tr><tr><td><a id="COMP_METADATA_TYPE_COMMANDS"></a> Command protocol metadata</td><td><a href="./../messages/common.html#COMP_METADATA_TYPE_COMMANDS">COMP_METADATA_TYPE_COMMANDS</a></td><td>TBD</td><td>Information about which commands and command paramters are supported in via the command protocol.</td></tr><tr><td><a id="COMP_METADATA_TYPE_PERIPHERALS"></a> Peripheral metadata</td><td><a href="./../messages/common.html#COMP_METADATA_TYPE_PERIPHERALS">COMP_METADATA_TYPE_PERIPHERALS</a></td><td><a href="https://github.com/mavlink/mavlink/blob/master/component_metadata/peripherals.schema.json" target="_blank" rel="noreferrer">peripherals.schema.json</a></td><td>Information about non-MAVLink peripherals connected to vehicle (on boot).</td></tr><tr><td><a id="COMP_METADATA_TYPE_EVENTS"></a> Event metadata</td><td><a href="./../messages/common.html#COMP_METADATA_TYPE_EVENTS">COMP_METADATA_TYPE_EVENTS</a></td><td>TBD</td><td>Information about events interface support by the vehicle.</td></tr><tr><td><a id="COMP_METADATA_TYPE_ACTUATORS"></a> Event metadata</td><td><a href="./../messages/common.html#COMP_METADATA_TYPE_ACTUATORS">COMP_METADATA_TYPE_ACTUATORS</a></td><td><a href="https://github.com/mavlink/mavlink/blob/master/component_metadata/actuators.schema.json" target="_blank" rel="noreferrer">actuators.schema.json </a></td><td>Metadata for actuator configuration (motors, servos and vehicle geometry) and testing.</td></tr></tbody></table><p>All schema files are <em>versioned</em> using a <code>version</code> integer.</p><p>Schema versions are backwards compatible - i.e. a ground station that was able to populate its UI from a file based on an older schema should be able to do so from a newer version (albeit losing information provided by the newer format).</p><p>Generally this means that new versions may add fields but should not delete them, and also that a recipient can ignore fields that it does not understand.</p><p>The schema are currently a work in progress and can be modified as needed. Once accepted, they will be under change control (<em>managed</em> in a similar way to standard MAVLink messages).</p><h2 id="file-locations-urls" tabindex="-1">File Locations/URLs <a class="header-anchor" href="#file-locations-urls" aria-label="Permalink to &quot;File Locations/URLs&quot;">​</a></h2><p><a href="#COMP_METADATA_TYPE_GENERAL">General metadata</a> files <em>must</em> be stored on the device, and will usually be <a href="#file-compression"><strong>.xz</strong> compressed</a>. The location of these files is returned in the <a href="#COMPONENT_METADATA">COMPONENT_METADATA</a> <code>uri</code> field.</p><p>Other component information files may be hosted on either the device or on the internet.</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>Where permitted by memory constraints you should host component information on the device (so that it is always available and cannot get out of sync).</p></div><p>Files on the device are downloaded using <a href="./../services/ftp.html">MAVLink FTP</a>. The URI format is defined in <a href="./../services/ftp.html#mavlink-ftp-url-scheme">MAVLink FTP URL Scheme</a>. A typical parameter metadata URI might look like this: <code>mftp:///component_metadata/parameters.json.xz</code>.</p><p>Files on the Internet are downloaded using HTTPS or HTTP via a normal web URL (e.g. <code>https://some_domain/component_metadata/parameters.json</code>).</p><h2 id="metadata-caching-crc" tabindex="-1">Metadata Caching (CRC) <a class="header-anchor" href="#metadata-caching-crc" aria-label="Permalink to &quot;Metadata Caching (CRC)&quot;">​</a></h2><p>The <a href="#COMPONENT_METADATA">COMPONENT_METADATA</a> message includes the <code>file_crc</code> field, which contain <a href="./../crc.html#crc32-algorithm">CRC32</a> values calculated for the file referenced in the <code>uri</code> field. A ground station should cache downloaded component metadata and only update it if the CRC value changes.</p><p>The <a href="#COMP_METADATA_TYPE_GENERAL">general metadata file</a> similarly provides file locations for other metadata supported by a component. It will also include <a href="./../crc.html#crc32-algorithm">CRC32</a> values any files that contain only static data (no CRC32 should be supplied for metadata files that might be updated dynamically).</p><h2 id="file-compression" tabindex="-1">File Compression <a class="header-anchor" href="#file-compression" aria-label="Permalink to &quot;File Compression&quot;">​</a></h2><p>Component information files may be <strong>.xz</strong> compressed (this is recommended for files that are hosted on the device).</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>The prototype implementation generates and compresses component information files at build time. No compression library is required within the flight stack itself.</p></div><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>Systems that <em>request</em> component information <strong>must</strong> support extraction of <strong>.xz</strong>-compressed JSON files.</p></div><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>The <a href="https://tukaani.org/xz/embedded.html" target="_blank" rel="noreferrer">Tukaani Project XZ Embedded</a> library is an easy-to-use XZ compression library for embedded systems and cross-platform C/C++ projects.</p></div><h2 id="sequences" tabindex="-1">Sequences <a class="header-anchor" href="#sequences" aria-label="Permalink to &quot;Sequences&quot;">​</a></h2><h3 id="component-discovery" tabindex="-1">Component Discovery <a class="header-anchor" href="#component-discovery" aria-label="Permalink to &quot;Component Discovery&quot;">​</a></h3><p>A GCS can <em>broadcast</em> the <code>MAV_CMD_REQUEST_MESSAGE</code> specifying <code>param1=397</code>; all components that support the protocol should respond with <code>COMPONENT_METADATA</code>.</p><p>A GCS can further discover all components in the system by monitoring the channel for <code>HEARTBEAT</code> ids, and then send the request to each of them to <a href="#check-protocol-is-supported">verify whether the protocol is supported</a>. The broadcast approach is recommended for GCSes that don&#39;t track all components on the link.</p><h3 id="check-if-protocol-is-supported" tabindex="-1">Check if Protocol is Supported <a class="header-anchor" href="#check-if-protocol-is-supported" aria-label="Permalink to &quot;Check if Protocol is Supported&quot;">​</a></h3><p>A system can query whether another component supports the protocol by sending the command <a href="./../messages/common.html#MAV_CMD_REQUEST_MESSAGE">MAV_CMD_REQUEST_MESSAGE</a> (specifying the <a href="./../messages/common.html#COMPONENT_METADATA">COMPONENT_METADATA</a> message).</p><p>The component will respond with <code>COMPONENT_METADATA.uri</code> containing a valid URI if the protocol is supported. If the protocol is not supported the component will ACK that the message with <code>MAV_RESULT_UNSUPPORTED</code>, <code>MAV_RESULT_DENIED</code> or <code>MAV_RESULT_FAILED</code>, or return a <code>null</code> value in <code>uri</code>.</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>A component that supports this service must return a general metadata file URI <em>that is hosted on the vehicle</em> (accessed using MAVLink FTP).</p></div><h3 id="get-metadata" tabindex="-1">Get MetaData <a class="header-anchor" href="#get-metadata" aria-label="Permalink to &quot;Get MetaData&quot;">​</a></h3><p>The basic sequence is shown below.</p><p><a href="https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNqVUt9r2zAQ_lcOPaWQFUofytwtYBy3jJG0i9M9GcJVOidiluTK54xS-r_vXLtZSym0fpH16ftxOt2D0sGQSlRLdx15TXOL24juvPQgX4ORrbYNeoastuT5LV5Q3FMc8GVggiDbEZ2OquSwrvqclkEH1wQvEFhfheiQbfDHg8vA_TKbDSYJLNLfm2wx36zyXzd5sd4s8qJIL_OJlIHu5Pvp17OjV0qRPucVLKVCmv2ESJrsnoCto9CNF4Gx0BeKPkj4759fLa6vlvmyL2OdztN1OoEu2ilUtqaNjvroY70AvSP950kFyL0F7LAVFP2WDEy61votZKtMOvTf-xg-6G7CX18HNK8CBk9p58X6GtCb_iFb-rxn4J2wHDEaZAS-b6iVBlcU-xkyfcVb8hSxPpC-3cYZTKoYHBjaWy1JEX54puiJD9eCYVVT5UiGwhoZzYceKpVEOipVIr-GKuxqLlXpH4XaNRJAubEcokoqrFuaKuw4FPdeq4RjR8-kcbxH1uM_z7kA6w" target="_blank" rel="noreferrer"><img src="https://mermaid.ink/img/pako:eNqVUt9r2zAQ_lcOPaWQFUofytwtYBy3jJG0i9M9GcJVOidiluTK54xS-r_vXLtZSym0fpH16ftxOt2D0sGQSlRLdx15TXOL24juvPQgX4ORrbYNeoastuT5LV5Q3FMc8GVggiDbEZ2OquSwrvqclkEH1wQvEFhfheiQbfDHg8vA_TKbDSYJLNLfm2wx36zyXzd5sd4s8qJIL_OJlIHu5Pvp17OjV0qRPucVLKVCmv2ESJrsnoCto9CNF4Gx0BeKPkj4759fLa6vlvmyL2OdztN1OoEu2ilUtqaNjvroY70AvSP950kFyL0F7LAVFP2WDEy61votZKtMOvTf-xg-6G7CX18HNK8CBk9p58X6GtCb_iFb-rxn4J2wHDEaZAS-b6iVBlcU-xkyfcVb8hSxPpC-3cYZTKoYHBjaWy1JEX54puiJD9eCYVVT5UiGwhoZzYceKpVEOipVIr-GKuxqLlXpH4XaNRJAubEcokoqrFuaKuw4FPdeq4RjR8-kcbxH1uM_z7kA6w" alt=""></a></p><p>In summary:</p><ol><li>GCS (client) sends <code>MAV_CMD_REQUEST_MESSAGE</code> to component (server) specifying <code>param1=397</code>. <ul><li>This is a normal <a href="./../services/command.html">command protocol</a> request with timeouts and resends based on the ACK.</li></ul></li><li>The component will ACK the command and immediately send the requested <code>COMPONENT_METADATA</code> message (populated with URI and CRC for the general metadata file). <ul><li>A <code>CMD_ACK</code> of anything other than <code>MAV_RESULT_ACCEPTED</code> indicates the protocol is not supported (sequence completes).</li></ul></li><li>GCS waits for the <code>COMPONENT_METADATA</code> message <ul><li>If not recieved the GCS should resend the request (typically in the application level).</li><li>Once information is received: <ul><li>the GCS checks if <code>COMPONENT_METADATA.file_crc</code> matches its cached CRC value. If so, there is no need to download the <a href="#COMP_METADATA_TYPE_GENERAL">general metadata file</a> (or other files it references) as it has not changed since the last download. If the cached values do not match the associated files should be downloaded and parsed (vehicle firmware has updated).</li></ul></li></ul></li><li>GCS downloads the file specified in the <code>uri</code> using MAVLink FTP.</li><li>GCS parses the general metadata for other supported metadata locations, and then downloads the files via MAVFTP or HTTP(s). This may be done immediately, or as needed.</li></ol><h2 id="metadata-types" tabindex="-1">Metadata Types <a class="header-anchor" href="#metadata-types" aria-label="Permalink to &quot;Metadata Types&quot;">​</a></h2><h3 id="actuators-comp-metadata-type-actuators" tabindex="-1">Actuators (COMP_METADATA_TYPE_ACTUATORS) <a class="header-anchor" href="#actuators-comp-metadata-type-actuators" aria-label="Permalink to &quot;Actuators (COMP_METADATA_TYPE_ACTUATORS)&quot;">​</a></h3><p>The actuators metadata allows a GCS to create a UI to configure and test actuators, and configure vehicle geometries, without having to understand anything about the underlying flight stack.</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>The mechanism works similarly to <a href="./../services/camera_def.html">camera definition files</a>. It can be used for flight stacks that allow outputs and geometry definition to be configured using parameters. If flight stack outputs or geometries cannot be configured using parameters, the mechanism can still be used to display the current geometry and output mappings, and to test outputs.</p></div><p>The definition contains information about actuator output drivers (e.g. PWM MAIN or UAVCAN), the functions that can be assigned to each output channel, supported geometries, and their configuration parameters. Detailed information can be found in the <a href="https://github.com/mavlink/mavlink/blob/master/component_metadata/actuators.schema.json" target="_blank" rel="noreferrer">schema file</a>, and there&#39;s also an <a href="https://github.com/mavlink/mavlink/blob/master/component_metadata/actuators.example.json" target="_blank" rel="noreferrer">example</a>.</p><p>Specifically, the following information is provided:</p><ul><li><p>A list of actuator output drivers (e.g. PWM MAIN or UAVCAN): <code>outputs_v1</code>. This can be hardware-specific. Each output driver contains one or more groups of output channels. A group contains a common set of configuration parameters, indexed for each channel. A parameter may be assigned a specific meaning, e.g. <code>disarmed</code>. A GCS can use this information to provide specific actions for these (without having to know all <code>disarmed</code> parameters a priori).</p></li><li><p>Actuator output functions: <code>functions_v1</code>. A list of the output functions (hardware) that can be connected to a particular output channel, for example: Motor 1, Landing Gear, Camera capture. Each actuator output channel is expected to provide a parameter that can be used to configure its output function.</p></li><li><p>A geometry/mixer section: <code>mixer_v1</code>. A list of frame geometries, where at most one geometry is selected (via parameter), and a list of actuator types. An actuator type (e.g. <code>servo</code> or <code>motor</code>) contains limits and defaults for actuator testing, and a set of output function values that can be assigned to this type. A GCS may use the type to render the geometry, so it can display different images depending on the type.</p><p>Each mixer contains one or more groups of actuators, where each group belongs to an actuator type. The group can contain a fixed or configurable number of actuators and a set of indexed configuration parameters. If the size is fixed, the actuator group can contain lists of fixed values, e.g. to provide position information for non-configurable actuators. As with the actuator outputs, parameters may be assigned a specific meaning, e.g. <code>posx</code>, which hints to the GCS that this parameter/value defines the x position of the actuator. This can be used to dynamically render a vehicle&#39;s geometry.</p><p>Additionally there is an optional list of rules. Rules are used to constrain or hide/disable geometry parameters depending on the value of a selection parameter. For example there could be a parameter to select the control surface type, and three parameters to configure the roll, pitch and yaw torque. When the user sets the type to &#39;Left Aileron&#39;, certain restrictions to roll and pitch torque are applied, and the yaw torque is hidden.</p></li></ul><p>A GCS can provide a UI for testing outputs based on the configured output functions, by iterating over all output channels and collecting the configured actuator output functions, and then utilizing the <code>MAV_CMD_ACTUATOR_TEST</code> command.</p><h2 id="translations" tabindex="-1">Translations <a class="header-anchor" href="#translations" aria-label="Permalink to &quot;Translations&quot;">​</a></h2><p>At high-level, metadata translation works as follows:</p><ul><li>The metadata provider sets the <code>translationUri</code> in <a href="#COMP_METADATA_TYPE_GENERAL">general metadata file</a> for each metadata type that supports translation. Note that the URL has no associated CRC as the translation data can change independently of metadata (for example, adding or changing translations).</li><li>The <code>translationUri</code> URL points to a summary JSON file that contains links to the separate files that contain each translation of the particular metadata type. The translation summary JSON file also contains modification timestamps for each linked translation file so that a GCS can determine whether a particular file has been updated. The translation files are in <a href="https://doc.qt.io/qt-6/linguist-ts-file-format.html" target="_blank" rel="noreferrer">TS file format</a>, and may optionally be compressed in .xz format.</li><li>A client (GCS) downloads the summary file then uses it to locate and download the translation file(s) it is interested in.</li><li>The client can then apply the downloaded translations to the metadata json file(s) (which contains annotations for which tags to translate).</li></ul><h3 id="caching" tabindex="-1">Caching <a class="header-anchor" href="#caching" aria-label="Permalink to &quot;Caching&quot;">​</a></h3><p>The following caching strategy is recommended for clients:</p><ul><li>Locally cache the downloaded translation files. These should be used until successfully replaced with a newer version.</li><li>After 3 days attempt to download the summary JSON file again.</li><li>Translation files can either be downloaded whenever the summary is downloaded or only when needed (because a modification timestamp has changed in the summary).</li></ul><h3 id="파일-형식" tabindex="-1">파일 형식 <a class="header-anchor" href="#파일-형식" aria-label="Permalink to &quot;파일 형식&quot;">​</a></h3><p>The metadata json contains a <strong>translation</strong> section, such as <a href="https://github.com/mavlink/mavlink/blob/master/component_metadata/parameter.translation.json" target="_blank" rel="noreferrer">this one</a>. The translation section follows <a href="https://github.com/mavlink/mavlink/blob/master/component_metadata/translation.schema.json" target="_blank" rel="noreferrer">this schema</a>, which is used to extract the translation strings into a TS file (see below for a script), and by the client to know which strings to translate. The TS file may be xz compressed.</p><p>This allows to add new metadata without having to change the translation implementation in the client.</p><p>The summary json has the following form:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;&lt;locale&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;file url&gt;.ts.xz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;last-modified&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;ISO 8601 timestamp&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>For example:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;fr_FR&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://raw.githubusercontent.com/PX4/PX4-Metadata-Translations/main/translated/parameters_fr_FR.ts.xz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;last-modified&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2023-03-22T06:15:59.203476+00:00&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;de_DE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://raw.githubusercontent.com/PX4/PX4-Metadata-Translations/main/translated/parameters_de_DE.ts.xz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;last-modified&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2023-03-22T06:15:59.199476+00:00&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="general-metadata-will-contain-the-location-of-translation-file-uris-but-not-their-crc" tabindex="-1">General metadata will contain the location of translation file URIs, but not their CRC. <a class="header-anchor" href="#general-metadata-will-contain-the-location-of-translation-file-uris-but-not-their-crc" aria-label="Permalink to &quot;General metadata will contain the location of translation file URIs, but not their CRC.&quot;">​</a></h3><p>Any server can be used to host translations. The following example uses github.com, as it is easy to set up, automate, and download files.</p><p>The example repository is <a href="https://github.com/PX4/PX4-Metadata-Translations:" target="_blank" rel="noreferrer">https://github.com/PX4/PX4-Metadata-Translations:</a></p><ul><li><code>metadata/</code> contains the untranslated metadata JSON files.</li><li><code>to_translate</code> contains the TS files to translate. This is generated from the files in <code>metadata/</code> using <code>scripts/prepare_ts.py</code>.</li><li>A translation service, such as <a href="https://crowdin.com/" target="_blank" rel="noreferrer">crowdin</a> can be used to translate the files</li><li><code>translated/</code> contains translated metadata TS files (in this case synced back from Crowdin)</li><li><code>scripts/update_summary.py</code> is executed to update the summary JSON file with translation file locations and modification dates.</li></ul><h2 id="open-issues" tabindex="-1">Open Issues <a class="header-anchor" href="#open-issues" aria-label="Permalink to &quot;Open Issues&quot;">​</a></h2><h3 id="schema-management" tabindex="-1">Schema Management <a class="header-anchor" href="#schema-management" aria-label="Permalink to &quot;Schema Management&quot;">​</a></h3><p>Schema <em>management</em> has not yet been signed off.</p><h3 id="guaranteed-availablility-of-component-information" tabindex="-1">Guaranteed Availablility of Component Information <a class="header-anchor" href="#guaranteed-availablility-of-component-information" aria-label="Permalink to &quot;Guaranteed Availablility of Component Information&quot;">​</a></h3><p>There is a concern that vehicles reliant on internet-hosted component information files may stop working if the hosting ceases.</p><p>This can generally be avoided by hosting the files compressed on-vehicle.</p><p>We propose that manufacturers that use autopilots with limited flash (1MB or below) and do custom firmware development should host the files in github.</p>`,77)]))}const u=t(s,[["render",n]]);export{p as __pageData,u as default};
