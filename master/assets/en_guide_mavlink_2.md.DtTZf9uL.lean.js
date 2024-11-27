import{_ as a,c as i,a8 as t,o as n}from"./chunks/framework.CnRC9NRC.js";const p=JSON.parse('{"title":"MAVLink 2","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/mavlink_2.md","filePath":"en/guide/mavlink_2.md"}'),o={name:"en/guide/mavlink_2.md"};function s(r,e,l,d,h,m){return n(),i("div",null,e[0]||(e[0]=[t('<h1 id="mavlink-2" tabindex="-1">MAVLink 2 <a class="header-anchor" href="#mavlink-2" aria-label="Permalink to &quot;MAVLink 2&quot;">​</a></h1><p><em>MAVLink 2</em> is a backward-compatible update to the MAVLink protocol that has been designed to bring more flexibility and security to MAVLink communication. <em>MAVLink 2</em> bindings have been developed for C, C++11 and Python (see <a href="./../#supported_languages">Supported Languages</a>).</p><p>This topic provides links to the main new features in MAVLink 2 and how it is used.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><p>The key new features of <em>MAVLink 2</em> are:</p><ul><li>24 bit message ID - Allows over 16 million unique message definitions in a dialect (MAVLink 1 was limited to 256)</li><li><a href="./../guide/message_signing.html">Packet signing</a> - Authenticate that messages were sent by trusted systems.</li><li><a href="./../guide/define_xml_element.html#message_extensions">Message extensions</a> - Add new fields to existing MAVLink message definitions without breaking binary compatibility for receivers that have not updated.</li><li><a href="./../guide/serialization.html#payload_truncation">Empty-byte payload truncation</a> - Empty (zero-filled) bytes at the end of the serialized payload must be removed before sending (All bytes were sent in <em>MAVLink 1</em>, regardless of content).</li><li><a href="./../guide/serialization.html#compat_flags">Compatibility Flags</a>/<a href="./../guide/serialization.html#incompat_flags">Incompatibility Flags</a> - Allow for backwards compatible evolution of the protocol by indicating frames that must be handled in a special/non-standard way (packets with compatibility flags can still be handled in the standard way, while packets with incompatibility flags must be dropped if the flage is not supported).</li></ul><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>The <em>MAVLink 2</em> <a href="https://docs.google.com/document/d/1XtbD0ORNkhZ8eKrsbSIZNLyg9sFRXMXbsR2mp37KbIg/edit?usp=sharing" target="_blank" rel="noreferrer">design document</a> provides additional background information about the changes.</p></div><h2 id="upgrading-to-mavlink-2" tabindex="-1">Upgrading to MAVLink 2 <a class="header-anchor" href="#upgrading-to-mavlink-2" aria-label="Permalink to &quot;Upgrading to MAVLink 2&quot;">​</a></h2><h3 id="version-handshaking-negotiation" tabindex="-1">Version Handshaking/Negotiation <a class="header-anchor" href="#version-handshaking-negotiation" aria-label="Permalink to &quot;Version Handshaking/Negotiation&quot;">​</a></h3><p><a href="./../guide/mavlink_version.html">MAVLink Versions</a> explains the <a href="./../guide/mavlink_version.html#version_handshaking">handshaking</a> used to determine the supported MAVLink version of either end of the channel, and how to <a href="./../guide/mavlink_version.html#negotiating_versions">negotiate the version to use</a>.</p><h3 id="c-implementation" tabindex="-1">C Implementation <a class="header-anchor" href="#c-implementation" aria-label="Permalink to &quot;C Implementation&quot;">​</a></h3><p>The MAVLink 2 C library is backwards compatible with MAVLink 1. Information on how to upgrade the library and work with MAVLink 1 is covered in <a href="./../mavgen_c/">Using C MAVLink Libraries (mavgen)</a>.</p>',12)]))}const c=a(o,[["render",s]]);export{p as __pageData,c as default};
