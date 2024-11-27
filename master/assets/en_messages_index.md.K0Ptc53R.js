import{_ as i,c as a,a8 as t,o as l}from"./chunks/framework.CnRC9NRC.js";const c=JSON.parse('{"title":"XML Definition Files & Dialects","description":"","frontmatter":{},"headers":[],"relativePath":"en/messages/index.md","filePath":"en/messages/index.md"}'),n={name:"en/messages/index.md"};function o(s,e,r,m,d,h){return l(),a("div",null,e[0]||(e[0]=[t('<h1 id="xml-definition-files-dialects" tabindex="-1">XML Definition Files &amp; Dialects <a class="header-anchor" href="#xml-definition-files-dialects" aria-label="Permalink to &quot;XML Definition Files &amp; Dialects&quot;">​</a></h1><p>MAVLink definitions files can be found in <a href="https://github.com/mavlink/mavlink/blob/master/message_definitions/" target="_blank" rel="noreferrer">mavlink/message definitions</a>. These can roughly be divided into:</p><ul><li><a href="#standard-definitions">Standard definitions</a> - core definitions shared by many flight stacks</li><li><a href="#test-definitions">Test definitions</a> - definitions to support testing and validation</li><li><a href="#dialects">Dialects</a> - <em>protocol-</em> and <em>vendor-specific</em> messages, enums and commands</li></ul><h2 id="standard-definitions" tabindex="-1">Standard Definitions <a class="header-anchor" href="#standard-definitions" aria-label="Permalink to &quot;Standard Definitions&quot;">​</a></h2><p>The following XML definition files are considered standard/core (i.e. not dialects):</p><ul><li><a href="./minimal.html">minimal.xml</a> - the minimum set of entities (messages, enums, MAV_CMD) required to set up a MAVLink network.</li><li><a href="./standard.html">standard.xml</a> - the standard set of entities that are implemented by almost all flight stacks (at least 2, in a compatible way). This <code>includes</code> <a href="./minimal.html">minimal.xml</a>.</li><li><a href="./common.html">common.xml</a> - the set of entities that have been implemented in at least one core flight stack. This <code>includes</code> <a href="./minimal.html">standard.xml</a></li></ul><blockquote><p><strong>Note</strong> We are still working towards moving the truly standard entities from <strong>common.xml</strong> to <strong>standard.xml</strong> Currently you should include <a href="./common.html">common.xml</a></p></blockquote><p>In addition:</p><ul><li><a href="./development.html">development.xml</a> - XML definitions that are <em>proposed</em> for inclusion in the standard definitions. These are work in progress.</li></ul><h2 id="test-definitions" tabindex="-1">Test Definitions <a class="header-anchor" href="#test-definitions" aria-label="Permalink to &quot;Test Definitions&quot;">​</a></h2><p>The following definitions are used for testing and dialect validation:</p><ul><li><a href="./all.html">all.xml</a> - This includes all other XML files, and is used to verify that there are no ID clashes (and can potentially be used by GCS to communicate with any core dialect).</li><li><a href="./test.html">test.xml</a> - Test XML definition file.</li></ul><h2 id="dialects" tabindex="-1">Dialects <a class="header-anchor" href="#dialects" aria-label="Permalink to &quot;Dialects  {#dialects}&quot;">​</a></h2><p>MAVLink <em>dialects</em> are XML definition files that define <em>protocol-</em> and <em>vendor-specific</em> messages, enums and commands.</p><blockquote><p><strong>Note</strong> Vendor forks of MAVLink may contain XML entities that have not yet been pushed into the main repository (and will not be documented).</p></blockquote><p>Dialects may <em>include</em> other MAVLink XML files, which may in turn contain other XML files (up to 5 levels of XML file nesting are allowed - see <code>MAXIMUM_INCLUDE_FILE_NESTING</code> in <a href="https://github.com/ArduPilot/pymavlink/blob/master/generator/mavgen.py#L44" target="_blank" rel="noreferrer">mavgen.py</a>). A typical pattern is for a dialect to include <a href="./../messages/common.html">common.xml</a> (containing the <em>MAVLink standard definitions</em>), extending it with vendor or protocol specific messages.</p><p>The dialect definitions are:</p><ul><li><a href="./cubepilot.html">cubepilot.xml</a></li><li><a href="./python_array_test.html">python_array_test.xml</a></li><li><a href="./ardupilotmega.html">ardupilotmega.xml</a></li><li><a href="./common.html">common.xml</a></li><li><a href="./development.html">development.xml</a></li><li><a href="./matrixpilot.html">matrixpilot.xml</a></li><li><a href="./ASLUAV.html">ASLUAV.xml</a></li><li><a href="./csAirLink.html">csAirLink.xml</a></li><li><a href="./all.html">all.xml</a></li><li><a href="./storm32.html">storm32.xml</a></li><li><a href="./icarous.html">icarous.xml</a></li><li><a href="./test.html">test.xml</a></li><li><a href="./AVSSUAS.html">AVSSUAS.xml</a></li><li><a href="./uAvionix.html">uAvionix.xml</a></li><li><a href="./minimal.html">minimal.xml</a></li><li><a href="./paparazzi.html">paparazzi.xml</a></li><li><a href="./standard.html">standard.xml</a></li><li><a href="./ualberta.html">ualberta.xml</a></li></ul>',18)]))}const p=i(n,[["render",o]]);export{c as __pageData,p as default};
