import{_ as t}from"./chunks/packet_mavlink_v2_signing.CgrxCsRJ.js";import{_ as a,c as i,a8 as s,o as n}from"./chunks/framework.CnRC9NRC.js";const u=JSON.parse('{"title":"Message Signing (Authentication)","description":"","frontmatter":{},"headers":[],"relativePath":"ko/guide/message_signing.md","filePath":"ko/guide/message_signing.md"}'),o={name:"ko/guide/message_signing.md"};function r(c,e,l,h,d,m){return n(),i("div",null,e[0]||(e[0]=[s('<h1 id="message-signing-authentication" tabindex="-1">Message Signing (Authentication) <a class="header-anchor" href="#message-signing-authentication" aria-label="Permalink to &quot;Message Signing (Authentication)&quot;">​</a></h1><p><a href="./../guide/mavlink_2.html">MAVLink 2</a> adds support for message signing, which allows a MAVLink system to verify that messages originate from a trusted source.</p><p>This topic provides general overview of message signing, which will be useful both for developers using existing MAVLink libraries and for writers of new MAVLink code generators. It explains how a system can determine if a message is signed and whether the signature is valid, how to allow unsigned messages to be accepted, and how to create and share the <em>secret</em> used to create the signature.</p><p>More detailed information for developers using existing MAVLink libraries can be found here:</p><ul><li><a href="./../mavgen_c/message_signing_c.html">C Message Signing</a> (mavgen)</li><li><a href="./../mavgen_python/#message_signing">Pymavlink Message Signing</a> (mavgen)</li></ul><h2 id="frame-format" tabindex="-1">Frame Format <a class="header-anchor" href="#frame-format" aria-label="Permalink to &quot;Frame Format&quot;">​</a></h2><p>For a signed packet the <strong>0x01</strong> bit of the <a href="./../guide/mavlink_2.html#incompat_flags">incompatibility flag field</a> is set true and an additional 13 bytes of &quot;signature&quot; data appended to the packet. The signed packet format is shown below.</p><p><img src="'+t+'" alt="MAVLink 2 Signed"></p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>The <a href="./../guide/mavlink_2.html#incompat_flags">incompatibility flags</a> in the packet header are used to indicate that the MAVLink library must reject the packet if it does not understand or cannot handle the flag. In other words, a MAVLink library that does not support signing must drop signed packets. The C library uses <a href="./../guide/mavlink_2.html#MAVLINK_IFLAG_SIGNED">MAVLINK_IFLAG_SIGNED</a> to represent the &quot;supports message signing&quot; bit.</p></div><p>The 13 bytes of the signature are:</p><table tabindex="0"><thead><tr><th>Data</th><th>Description</th></tr></thead><tbody><tr><td><a href="#link_ids">linkID</a> (8&amp;nbsp;bits)</td><td>ID of link on which packet is sent. Normally this is the same as the <em>channel</em>.</td></tr><tr><td><a href="#timestamps">timestamp</a> (48 bits)</td><td>Timestamp in 10 microsecond units since 1st January 2015 GMT time. This <em>must</em> monotonically increase for every message on a particular <a href="#link_ids">link</a>. Note that means the timestamp may get ahead of the actual time if the packet rate averages more than 100,000 packets per second.</td></tr><tr><td><a href="#signature">signature</a> (48 bits)</td><td>A 48 bit signature for the packet, based on the complete packet, timestamp, and secret key.</td></tr></tbody></table><p>See below for more information about the fields.</p><h3 id="link_ids" tabindex="-1">Link IDs <a class="header-anchor" href="#link_ids" aria-label="Permalink to &quot;Link IDs {#link_ids}&quot;">​</a></h3><p>The 8 bit link ID is provided to ensure that the signature system is robust for multi-link MAVLink systems. Each implementation should assign a link ID to each of the MAVLink communication channels it has enabled and should put this ID in the link ID field. The link ID is especially important where there may be a significant latency difference between different links (such as WiFi combined with a telemetry radio).</p><p>The monotonically increasing <a href="#timestamp">timestamp</a> rule is applied separately for each logical stream, where a stream is defined by the tuple:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(SystemID,ComponentID,LinkID)</span></span></code></pre></div><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>For more information see <a href="./../mavgen_c/message_signing_c.html#handling_link_ids">C Message Signing &gt; Handling Link IDs</a>.</p></div><h3 id="signature" tabindex="-1">Signature <a class="header-anchor" href="#signature" aria-label="Permalink to &quot;Signature {#signature}&quot;">​</a></h3><p>The 48 bit (6 byte) signature is the first 48 bits of a SHA-256 hash of the complete packet (without the signature, but including the timestamp) appended to the <a href="#secret_key">secret key</a>. The secret key is 32 bytes of binary data stored on both ends of a MAVLink channel (i.e. an autopilot and a ground station or MAVLink API).</p><p>This is shown below, where <code>+</code> represents concatenation and <code>sha256_48()</code> is a sha256 implementation which returns the first 48 bits of the normal sha256 output:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>signature = sha256_48(secret_key + header + payload + CRC + link-ID + timestamp)</span></span></code></pre></div><h2 id="timestamp" tabindex="-1">Timestamp Handling <a class="header-anchor" href="#timestamp" aria-label="Permalink to &quot;Timestamp Handling {#timestamp}&quot;">​</a></h2><p>The timestamp is a 48 bit number with units of 10 microseconds since 1st January 2015 GMT. For systems where the time since 1/1/1970 is available (the unix epoch) you can use an offset in seconds of 1420070400.</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>This is a loose definition, as the various update mechanisms detailed below may result in the timestamp being significantly different from actual GMT time.</p></div><p>All timestamps generated must be at least 1 more than the previous timestamp sent in the same session for the same link/<code>(SystemID, ComponentID, LinkID)</code> tuple. The timestamp may get ahead of GMT time if there is a burst of packets at a rate of more than 100 thousand packets per second.</p><p>A MAVLink-enabled device may not know the current GMT time, for example if it does not have a reliable time source, or if it has just booted and not yet obtained the time from GPS or some other system.</p><p>Systems should implement the following rules to obtain a reliable timestamp:</p><ul><li><p>The current timestamp should be stored regularly in persistent storage (ideally at least once a minute)</p></li><li><p>The timestamp used on startup should be the maximum of the timestamp implied by the system clock and the stored timestamp</p></li><li><p>If the system does not have an RTC mechanism then it should update its timestamp when GPS lock is achieved. The maximum of the timestamp from the GPS and the stored timestamp should be used.</p></li><li><p>The timestamp should be incremented by one on each message sent from a particular link.</p></li><li><p>When a correctly signed message is decoded the timestamp should be replaced by the timestamp of the incoming message if that timestamp is greater than the current timestamp.</p><div class="note custom-block github-alert"><p class="custom-block-title">&gt; The link timestamp must never be updated with the timestamp from an incorrectly signed packet (even if these are being [accepted](#accepting_incorrectly_signed_packets)).</p><p></p></div></li><li><p>The timestamp on incoming signed messages should be checked against the previous timestamp for the incoming <code>(linkID,srcSystem,SrcComponent)</code> tuple and the message rejected if it is smaller.</p></li><li><p>If there is no previous message with the given <code>(linkID,srcSystem,SrcComponent)</code> then the timestamp should be accepted if it not more than 6 million (one minute) behind the current timestamp.</p></li></ul><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>For devices that store the timestamp in persistent storage, implementations can prevent race conditions by storing two timestamp values. On write the smaller of the two values should be updated. On read the larger of the two values should be used.</p></div><h2 id="accept_signed_packets" tabindex="-1">Accepting Signed Packets <a class="header-anchor" href="#accept_signed_packets" aria-label="Permalink to &quot;Accepting Signed Packets {#accept_signed_packets}&quot;">​</a></h2><p>When a signed packet arrives it should be discarded if the:</p><ul><li>Timestamp is older than the previous packet from the same logical stream - where a logical stream is defined as the sequence of MAVLink packets with the same (<code>SystemID</code>, <code>ComponentID</code>, <code>LinkID</code>) tuple.</li><li>Computed 48 bit signature does not match the signature included in the packet.</li><li>The timestamp is more than 1 minute (6,000,000) behind the local system’s timestamp.</li></ul><h2 id="accepting_unsigned_packets" tabindex="-1">Accepting Unsigned Packets <a class="header-anchor" href="#accepting_unsigned_packets" aria-label="Permalink to &quot;Accepting Unsigned Packets {#accepting_unsigned_packets}&quot;">​</a></h2><p>MAVLink libraries should provide a mechanism that allows a system to conditionally accept <em>unsigned</em> packets.</p><p>The rules for accepting these packets will be implementation specific, but could be based on a combination of a parameter setting, transport type, message type, (in)compatibility flags etc.</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>All packets that do not meet the system-specific unsigned packet acceptance rules must be rejected (otherwise there is no benefit gained from signing/authentication).</p></div><p>Some suggestions for when to accept unsigned packets:</p><ul><li>Accept all unsigned packets based on a system-specific parameter.</li><li>Accept all unsigned packets if the connection is over a &quot;secure channel&quot; (e.g. local USB cable or local wired Ethernet cable).</li><li><code>RADIO_STATUS</code> packets are always accepted without signing (to make life easier for telemetry radios).</li><li>Accept all unsigned packets when in an &quot;unsigned mode&quot; (perhaps triggered by a hardware button pressed on boot).</li><li>Accept all unsigned packets until a signed packet is received (unconditionally), then move to the more restricted signing rules above.</li></ul><h2 id="accepting_incorrectly_signed_packets" tabindex="-1">Accepting Incorrectly Signed Packets <a class="header-anchor" href="#accepting_incorrectly_signed_packets" aria-label="Permalink to &quot;Accepting Incorrectly Signed Packets {#accepting_incorrectly_signed_packets}&quot;">​</a></h2><p>MAVLink libraries should provide a mechanism that allows a system to conditionally accept incorrectly signed packets.</p><p>This feature might be useful for finding a lost vehicle with a corrupted secret key (the GCS could choose to still display position information, albeit ideally with a different &quot;untrusted&quot; icon).</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>A system that is accepting incorrectly signed packets should provide a highly conspicuous indication that the connection is <em>unsafe</em>/<em>insecure</em>. Malformed signed packets indicate a bad configuration, transport failure, protocol failure, or hostile manipulation.</p></div><h2 id="secret_key" tabindex="-1">Secret Key Management <a class="header-anchor" href="#secret_key" aria-label="Permalink to &quot;Secret Key Management {#secret_key}&quot;">​</a></h2><p>A secret key is 32 bytes of binary data that are used to create message signatures that can be verified by other holders of the key. The key should be created on one system in the network (often a GCS) and shared to other trusted devices via secure channels. Systems must have a shared key in order to be able to communicate.</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>The <em>mavgen</em> <a href="./../mavgen_c/message_signing_c.html">C</a> and <a href="./../mavgen_python/#message_signing">Python</a> libraries support only one key per link. This is a choice of the library and not a limit/requirement of the protocol. An implementation might instead store a pool of keys, and/or manage keys on a per-connection basis.</p></div><p>The secret key should be stored in persistent storage, and must not be exposed via any publicly accessible communication protocol. In particular, the key must not be exposed in MAVLink parameters, MAVLink log files or dataflash log files that may be used for public log analysis.</p><p>The method of generating the secret key is implementation dependent. For example, it could be generated by:</p><ul><li>A user-entered string that is then run through SHA-256.</li><li>A random key generator.</li></ul><p>The secret key may be shared to other devices using the <a href="./../messages/common.html#SETUP_SIGNING">SETUP_SIGNING</a> message. The message should only ever be sent over a secure link (e.g. USB or wired Ethernet) as a direct message to each connected <code>system_id</code>/<code>component_id</code>. The receiving system must be set up to process the message and store the received secret key to the appropriate permanent storage.</p><p>The same secure method can be used to both <em>set</em> and <em>reset</em> a system&#39;s key (reseting a key does not have to be &quot;more secure&quot; than setting it in the first place).</p><p>The <code>SETUP_SIGNING</code> message should never be broadcast, and received <code>SETUP_SIGNING</code> messages must never be automatically forwarded to other active MAVLink devices/streams/channels. This is to avoid the case where a key received over a secure link (e.g. USB) is automatically forwarded to another system over an insecure link (e.g. Wifi).</p><p>Autopilots that don&#39;t offer MAVLink over USB might create a module that can set the secret key from a command line interface (e.g. the NSH Shell).</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>We recommend that GCS implementations should generate the secret key and share this with connected systems over a secure link (e.g. USB). The receiving system may be configured to ignore message signatures on the secure channel (i.e. accept all <a href="#accept_signed_packets">signed</a>, <a href="#accepting_unsigned_packets">unsigned</a> or <a href="#accepting_incorrectly_signed_packets">incorrectly signed</a> packets), so that it is possible to reset a key that has been lost or corrupted.</p></div><h2 id="logging" tabindex="-1">Logging <a class="header-anchor" href="#logging" aria-label="Permalink to &quot;Logging&quot;">​</a></h2><p>In order to avoid leaking the secret key used for signing, systems should omit <a href="./../messages/common.html#SETUP_SIGNING">SETUP_SIGNING</a> messages from logs (or replace the secret with 32 0xFF bytes in the logged message).</p><p>Similarly, signed packets should have the signature <a href="./../guide/mavlink_2.html#incompat_flags">incompatibility bit</a> cleared and the signature block removed before being put into telemetry log files. This makes it harder for potential attacker to collect large amounts of signature data with which to attack the system.</p><h2 id="further-information" tabindex="-1">Further Information <a class="header-anchor" href="#further-information" aria-label="Permalink to &quot;Further Information&quot;">​</a></h2><p>The <a href="https://docs.google.com/document/d/1ETle6qQRcaNWAmpG2wz0oOpFKSF_bcTmYMQvtTGI8ns/edit?usp=sharing" target="_blank" rel="noreferrer">Message Signing Proposal</a> contains additional information, including:</p><ul><li>Reasoning behind the design decisions.</li><li>Evaluation of security effectiveness, including resistance to replay and offline attacks.</li><li>Assumptions.</li></ul><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>Much of this content is derived from the <a href="https://docs.google.com/document/d/1ETle6qQRcaNWAmpG2wz0oOpFKSF_bcTmYMQvtTGI8ns/edit?usp=sharing" target="_blank" rel="noreferrer">Message Signing Proposal</a> (Google Doc).</p></div>',60)]))}const f=a(o,[["render",r]]);export{u as __pageData,f as default};
