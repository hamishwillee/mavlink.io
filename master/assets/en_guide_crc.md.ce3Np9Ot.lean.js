import{_ as t,c as a,a8 as i,o}from"./chunks/framework.CnRC9NRC.js";const p=JSON.parse('{"title":"MAVLink CRC","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/crc.md","filePath":"en/guide/crc.md"}'),r={name:"en/guide/crc.md"};function n(l,e,s,c,h,m){return o(),a("div",null,e[0]||(e[0]=[i('<h1 id="mavlink-crc" tabindex="-1">MAVLink CRC <a class="header-anchor" href="#mavlink-crc" aria-label="Permalink to &quot;MAVLink CRC&quot;">​</a></h1><p>MAVLink services that need to use a Cyclic Redundancy Check (CRC) should choose the CRC32 algorithm described below.</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>Using the same CRC implementation for all cases means that only one implementation is required. Do not introduce another unless there without a compelling technical reason.</p></div><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>This CRC is <a href="#implementations">used for higher level services</a> (it is not related to the CRC16 used for the checksum in <a href="./serialization.html#checksum">MAVLink serialization</a>).</p></div><h2 id="crc32-algorithm" tabindex="-1">CRC32 Algorithm <a class="header-anchor" href="#crc32-algorithm" aria-label="Permalink to &quot;CRC32 Algorithm&quot;">​</a></h2><p>The CRC32 algorithm used by MAVLink is similar to (but different from) the ISO 3309 standard based on the polygon 0x04C11DB7. It is commonly referred to as &quot;the CRC32 based on Gary Brown&#39;s work&quot;.</p><p>The difference of MAVLink&#39;s implementation versus the standard are:</p><ul><li>Start at 0 instead of <code>0xFFFFFFFF</code>.</li><li>Missing final XOR out operation with <code>0xFFFFFFFF</code>.</li></ul><p>The effects of the initial value and final XOR operation are documented in this <a href="https://github.com/torvalds/linux/blob/master/Documentation/staging/crc32.rst" target="_blank" rel="noreferrer">brief tutorial on CRC computation of the Linux kernel</a>.</p><h2 id="implementations" tabindex="-1">Implementations <a class="header-anchor" href="#implementations" aria-label="Permalink to &quot;Implementations&quot;">​</a></h2><p>This implementation is currently used in:</p><ul><li><a href="./../services/ftp.html">File Transfer Protocol (FTP)</a></li><li><a href="./../services/parameter.html#px4">Parameter Protocol &gt; PX4 Implementation</a> (Implementation-specific hash of cached parameters).</li></ul>',12)]))}const u=t(r,[["render",n]]);export{p as __pageData,u as default};
