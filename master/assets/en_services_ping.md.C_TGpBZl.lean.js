import{_ as t,c as i,a8 as o,o as s}from"./chunks/framework.CnRC9NRC.js";const h=JSON.parse('{"title":"PING Protocol","description":"","frontmatter":{},"headers":[],"relativePath":"en/services/ping.md","filePath":"en/services/ping.md"}'),n={name:"en/services/ping.md"};function a(c,e,r,l,m,p){return s(),i("div",null,e[0]||(e[0]=[o('<h1 id="ping-protocol" tabindex="-1">PING Protocol <a class="header-anchor" href="#ping-protocol" aria-label="Permalink to &quot;PING Protocol&quot;">​</a></h1><p>The PING Protocol enables a system to measure system latencies on any connection: serial port, radio modem, UDP etc.</p><p>The PING protocol is implemented with just the <a href="./../messages/common.html#PING">PING</a> message. The message is sent with a timestamp and a sequence number that are returned by recipients, and can hence be used to determine the round-trip time.</p><h2 id="ping-sequence" tabindex="-1">Ping Sequence <a class="header-anchor" href="#ping-sequence" aria-label="Permalink to &quot;Ping Sequence&quot;">​</a></h2><p>A simplified sequence diagram is given below:</p><p><a href="https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtO1xuICAgIHBhcnRpY2lwYW50IFBJTkcoaW5nKVxuICAgIHBhcnRpY2lwYW50IFBJTkcoZWQpXG4gICAgUElORyhpbmcpLT4-UElORyhlZCk6IFBJTkcgKHNlcTogbiwgc3lzL2NvbXA9MClcbiAgICBQSU5HKGluZyktPj5QSU5HKGluZyk6IFdhaXQgcmVzcG9uc2VcbiAgICBQSU5HKGVkKS0-PlBJTkcoaW5nKTogUElORyAoc2VxIG4sIHN5cy9jb21wID4gMClcbiAgICBQSU5HKGluZyktPj5QSU5HKGluZyk6IENhbGN1bGF0ZSByb3VuZC10cmlwIHRpbWUiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ" target="_blank" rel="noreferrer"><img src="https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtO1xuICAgIHBhcnRpY2lwYW50IFBJTkcoaW5nKVxuICAgIHBhcnRpY2lwYW50IFBJTkcoZWQpXG4gICAgUElORyhpbmcpLT4-UElORyhlZCk6IFBJTkcgKHNlcTogbiwgc3lzL2NvbXA9MClcbiAgICBQSU5HKGluZyktPj5QSU5HKGluZyk6IFdhaXQgcmVzcG9uc2VcbiAgICBQSU5HKGVkKS0-PlBJTkcoaW5nKTogUElORyAoc2VxIG4sIHN5cy9jb21wID4gMClcbiAgICBQSU5HKGluZyktPj5QSU5HKGluZyk6IENhbGN1bGF0ZSByb3VuZC10cmlwIHRpbWUiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ" alt="Mermaid sequence: Ping"></a></p><p>The ping<strong>ing</strong> system initially populates a PING message with:</p><ul><li><code>time_usec</code>: Current system timestamp.</li><li><code>seq</code>: Current <code>PING</code> sequence number (n, n+1, ...). This should be iterated for every <code>PING</code> message sent and overflow back to zero.</li><li><code>target_system</code> and <code>target_component</code>: 0 (indicates a PING request).</li><li>The message header automatically includes the sender system.</li></ul><p>The message may be received by multiple systems. All ping<strong>ed</strong> systems should respond with another <code>PING</code> message where:</p><ul><li>The <em>original</em> timestamp and sequence number from the receive <code>PING</code> are sent back in the response.</li><li><code>target_system</code> and <code>target_component</code> are set to the ids of the pinging system from the incoming ping message header.</li></ul><p>The original ping<strong>ing</strong> system:</p><ul><li><p>Receives a <code>PING</code> message with <code>target_system</code> and <code>target_component</code> matching its address.</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>Any non-zero target system/component indicates a response message. The matching ids inform the system that it is the intended recipient.</p></div></li><li><p>The system calculates the latency from the current system time and the time in the response <code>PING</code> for the matching sequence number.</p></li><li><p>A system that is sending a single <code>PING</code> can use a timeout to detect a dropped packet. A system that is streaming (multiple) <code>PING</code> messages should not start detecting dropped packets until after the first responses have been received (to ensure that dropped packets are not just &quot;late&quot;).</p></li></ul><h2 id="c-implementation" tabindex="-1">C Implementation <a class="header-anchor" href="#c-implementation" aria-label="Permalink to &quot;C Implementation&quot;">​</a></h2><p>The protocol has been implemented in C by PX4 and <em>QGroundControl</em>. This implementation can be used in your own code within the terms of their software licenses.</p><p>PX4 Implementation:</p><ul><li><a href="https://github.com/PX4/Firmware/blob/master/src/modules/mavlink/mavlink_messages.cpp" target="_blank" rel="noreferrer">mavlink_messages.cpp</a></li><li><a href="https://github.com/PX4/Firmware/blob/master/src/modules/mavlink/mavlink_receiver.cpp" target="_blank" rel="noreferrer">mavlink_receiver.cpp</a></li></ul><p><em>QGroundControl</em> implementation:</p><ul><li><a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/Vehicle/Vehicle.cc" target="_blank" rel="noreferrer">src/Vehicle/Vehicle.cc</a></li></ul>',18)]))}const g=t(n,[["render",a]]);export{h as __pageData,g as default};
