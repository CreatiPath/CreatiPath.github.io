import{_ as p,o as a,c as t,d as n,b as s}from"./app.be380e2e.js";const o={},e=s(`<h1 id="bai-3-cau-truc-re-nhanh" tabindex="-1"><a class="header-anchor" href="#bai-3-cau-truc-re-nhanh" aria-hidden="true">#</a> B\xE0i 3. C\u1EA5u tr\xFAc r\u1EBD nh\xE1nh</h1><h2 id="cau-lenh-\u0111ieu-kien" tabindex="-1"><a class="header-anchor" href="#cau-lenh-\u0111ieu-kien" aria-hidden="true">#</a> C\xE2u l\u1EC7nh \u0111i\u1EC1u ki\u1EC7n</h2><p>Trong c\xE1c ng\xF4n ng\u1EEF th\xEC lu\xF4n lu\xF4n c\xF3 c\xE1i n\xE0y, m\xECnh s\u1EBD kh\xF4ng nhi\u1EC1u m\xE0 \u0111i th\u1EB3ng \u0111\u1EBFn chi ti\u1EBFt</p><p>C\xF3\xA0<strong>2</strong>\xA0lo\u1EA1i c\xE2u \u0111i\u1EC1u ki\u1EC7n :</p><ul><li><strong>if..else</strong> : xem\xA0<a href="https://www.youtube.com/watch?v=h3fgxLlmnUQ" target="_blank" rel="noopener noreferrer">t\u1EA1i \u0111\xE2y</a></li><li><strong>switch..case</strong>\xA0: xem <a href="https://www.youtube.com/watch?v=IgNvSHjWxfY" target="_blank" rel="noopener noreferrer">t\u1EA1i \u0111\xE2y</a></li></ul><hr><h2 id="_1-lenh-if-else" tabindex="-1"><a class="header-anchor" href="#_1-lenh-if-else" aria-hidden="true">#</a> 1. L\u1EC7nh if..else</h2><p>N\xF3 c\u0169ng gi\u1ED1ng nh\u01B0 c\xE1c ng\xF4n ng\u1EEF kh\xE1c th\xF4i, <strong>if</strong> l\xE0 n\u1EBFu, <strong>else if</strong> l\xE0 c\xF2n n\u1EBFu, <strong>else</strong> l\xE0 c\xE1c tr\u01B0\u1EDDng h\u1EE3p c\xF2n l\u1EA1i, c\u1EE5 th\u1EC3 sau \u0111\xE2y :</p><ul><li>S\u1EED d\u1EE5ng <strong>if</strong> \u0111\u1EC3 x\xE1c \u0111\u1ECBnh \u0111i\u1EC1u ki\u1EC7n <strong>\u0111\xFAng</strong> \u0111\u1EC3 th\u1EF1c thi</li><li>S\u1EED d\u1EE5ng <strong>else if</strong> \u0111\u1EC3 x\xE1c \u0111\u1ECBnh c\xE1c \u0111i\u1EC1u <strong>\u0111\xFAng</strong> ti\u1EBFp theo ki\u1EC3m tra, sau khi <strong>if</strong> sai</li><li>S\u1EED d\u1EE5ng <strong>else</strong> \u0111\u1EC3 x\xE1c \u0111\u1ECBnh c\xE1c \u0111i\u1EC1u ki\u1EC7n <strong>sai</strong></li></ul><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">int</span> date <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> 
<span class="token keyword">if</span><span class="token punctuation">(</span>date <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Date c\u1EE7a b\u1EA1n l\xE0 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>date <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Date c\u1EE7a b\u1EA1n l\xE0 th\u1EE9 3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span><span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Date c\u1EE7a b\u1EA1n kh\xE1c m\u1ECDi c\xE1i tr\xEAn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : Date c\u1EE7a b\u1EA1n l\xE0 2</span>
</code></pre></div><p>C\xF3 1 lo\u1EA1i ki\u1EC3u r\xFAt g\u1ECDn c\u1EE7a <strong>if..else</strong> l\xE0 <strong>to\xE1n t\u1EED 3 ng\xF4i</strong> (<em>c\xF3 th\u1EC3 tham kh\u1EA3o</em>), c\xF3 c\xFA ph\xE1p :</p><p>Bi\u1EBFn <strong>=</strong> (\u0111i\u1EC1u ki\u1EC7n ) <strong>?</strong> Th\u1EF1c thi <strong>true</strong> <strong>:</strong> Th\u1EF1c thi <strong>false</strong> <strong>;</strong></p><p><strong>D\u1EA1ng</strong> <a href="">if..else</a> :</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">int</span> date <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>date <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Date l\xE0 th\u1EE9 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Date kh\xF4ng ph\u1EA3i l\xE0 th\u1EE9 2&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// Output : Date l\xE0 th\u1EE9 2</span>
</code></pre></div><p><strong>D\u1EA1ng</strong> <a href="">to\xE1n t\u1EED 3 ng\xF4i</a> :</p><div class="language-java ext-java"><pre class="language-java"><code>nt date <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token punctuation">(</span>date <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&quot;Date l\xE0 th\u1EE9 2&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Date l\xE0 th\u1EE9 2&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Output : Date l\xE0 th\u1EE9 2</span>
</code></pre></div><hr><h2 id="_2-lenh-switch-case" tabindex="-1"><a class="header-anchor" href="#_2-lenh-switch-case" aria-hidden="true">#</a> 2. L\u1EC7nh switch..case</h2><p>N\xF3 c\u0169ng t\u01B0\u01A1ng \u0111\u01B0\u01A1ng v\u1EDBi <strong>if..else</strong>, nh\u01B0ng n\u1EBFu b\u1EA1n \u0111\u1EB7t \u0111i\u1EC1u ki\u1EC7n ch\u1EC9 so s\xE1nh v\u1EDBi <strong>gi\xE1 tr\u1ECB nguy\xEAn</strong> th\xEC \u0111\xE2y s\u1EBD th\xEDch h\u1EE3p cho b\u1EA1n nh\u01B0 sau;</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">int</span> date <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">switch</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">case</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token string">&quot;Date l\xE0 1&quot;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
   <span class="token keyword">case</span> <span class="token number">2</span> <span class="token operator">:</span> <span class="token string">&quot;Date l\xE0 2&quot;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
   <span class="token keyword">case</span> <span class="token number">3</span> <span class="token operator">:</span> <span class="token string">&quot;Date l\xE0 3&quot;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
   <span class="token keyword">case</span> <span class="token number">4</span> <span class="token operator">:</span> <span class="token string">&quot;Date l\xE0 4&quot;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token keyword">default</span><span class="token operator">:</span>
   <span class="token string">&quot;C\xE1c Date c\xF2n l\u1EA1i&quot;</span><span class="token punctuation">;</span>
   <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : Date l\xE0 3</span>
</code></pre></div>`,20),c={class:"custom-container warning"},l={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},u=n("path",{d:"M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z",style:{fill:"#f3cc2e","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.18)"},null,-1),k=[u],i=s('<p class="custom-container-title">WARNING</p><p>\u{1F680}\xA0Nh\u01B0 b\u1EA1n c\xF3 th\u1EC3 th\u1EA5y th\xEC\xA0<strong>switch..case</strong>\xA0c\xF3 nh\u1EEFng l\u01B0u \xFD sau :</p><ul><li>C\xE1c\xA0<strong>case</strong>\xA0l\xE0 tr\u01B0\u1EDDng h\u1EE3p c\u1EE7a bi\u1EBFn\xA0<strong>date</strong>\xA0v\xE0 ch\u1EC9 ch\u1EA5p nh\u1EADn\xA0<strong>s\u1ED1 nguy\xEAn</strong></li><li>Cu\u1ED1i\xA0<strong>case</strong>\xA0ph\u1EA3i c\xF3\xA0<strong>break</strong>\xA0\u0111\u1EC3 tho\xE1t v\xF2ng \u0111i\u1EC1u ki\u1EC7n</li><li><strong>default</strong>\xA0t\u01B0\u01A1ng \u1EE9ng v\u1EDBi\xA0<strong>else</strong>\xA0l\xE0 c\xE1c tr\u01B0\u1EDDng h\u1EE3p c\xF2n l\u1EA1i</li><li>C\xF3 th\u1EC3 g\u1ED9p nhi\u1EC1u\xA0<strong>case</strong>\xA0l\u1EA1i, nh\u01B0\xA0<strong>case 1,2,3:</strong></li></ul>',3),r=s(`<h2 id="_3-bai-tap" tabindex="-1"><a class="header-anchor" href="#_3-bai-tap" aria-hidden="true">#</a> 3. B\xE0i t\u1EADp</h2><p>C\xF9ng m\xECnh gi\u1EA3i quy\u1EBFt c\xE1c b\xE0i t\u1EADp sau nh\xE9, \u0111\u1EC3 hi\u1EC7u qu\u1EA3 h\u01A1n b\u1EA1n n\xEAn code tr\u01B0\u1EDBc r\u1ED3i quay l\u1EA1i xem k\u1EBFt qu\u1EA3 c\xF3 gi\u1ED1ng m\xECnh kh\xF4ng nha</p><h3 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else" aria-hidden="true">#</a> If..Else</h3><h4 id="kiem-tra-so-n-nhap-tu-ban-phim-la-so-am-hay-duong" tabindex="-1"><a class="header-anchor" href="#kiem-tra-so-n-nhap-tu-ban-phim-la-so-am-hay-duong" aria-hidden="true">#</a> Ki\u1EC3m tra s\u1ED1 N nh\u1EADp t\u1EEB b\xE0n ph\xEDm l\xE0 s\u1ED1 \xE2m hay d\u01B0\u01A1ng.</h4><details class="custom-container details"><summary>C\xE1ch 1: S\u1EED d\u1EE5ng If..Else l\u1ED3ng nhau</summary><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CauLenhReNhanh</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// CACH 1: IF ELSE LONG NHAU</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">&quot; la so duong&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// a &lt;= 0</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">&quot; la so am&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">&quot; la so 0!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details><details class="custom-container details"><summary>C\xE1ch 2: S\u1EED d\u1EE5ng If..Else if..Else</summary><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CauLenhReNhanh</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// CACH 1: IF ELSE LONG NHAU</span>
        <span class="token comment">//if = n\u1EBFu; else = ng\u01B0\u1EE3c l\u1EA1i; elseif = ng\u01B0\u1EE3c l\u1EA1i n\u1EBFu</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">&quot; la so duong&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">&quot; la so 0!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">&quot; la so am&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details><h4 id="kiem-tra-so-chan-hay-so-le" tabindex="-1"><a class="header-anchor" href="#kiem-tra-so-chan-hay-so-le" aria-hidden="true">#</a> Ki\u1EC3m tra s\u1ED1 ch\u1EB5n hay s\u1ED1 l\u1EBB</h4><details class="custom-container details"><summary>B\xE0i gi\u1EA3i</summary><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KiemTraSoChanLe</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">%</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u0110\xE2y l\xE0 s\u1ED1 ch\u1EB5n!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u0110\xE2y l\xE0 s\u1ED1 l\u1EBB!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details><h4 id="kiem-tra-nam-nhuan" tabindex="-1"><a class="header-anchor" href="#kiem-tra-nam-nhuan" aria-hidden="true">#</a> Ki\u1EC3m tra n\u0103m nhu\u1EADn</h4><details class="custom-container details"><summary>B\xE0i gi\u1EA3i</summary><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NamNhuan</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> year<span class="token punctuation">;</span>
        <span class="token class-name">Scanner</span> scan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Nh\u1EADp v\xE0o n\u0103m b\u1EA1n c\u1EA7n ki\u1EC3m tra:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        year <span class="token operator">=</span> scan<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        scan<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> isLeap <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>year <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token comment">//chia h\u1EBFt cho 4 l\xE0 n\u0103m nhu\u1EADn</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span> year <span class="token operator">%</span> <span class="token number">100</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token comment">//n\u1EBFu v\u1EEBa chia h\u1EBFt cho 4 m\xE0 v\u1EEBa chia h\u1EBFt cho 100 th\xEC kh\xF4ng ph\u1EA3i n\u0103m nhu\u1EADn</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span> year <span class="token operator">%</span> <span class="token number">400</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token comment">//chia h\u1EBFt cho 400 l\xE0 n\u0103m nhu\u1EADn</span>
                    isLeap <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token keyword">else</span>
                    isLeap <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span><span class="token comment">//kh\xF4ng chia h\u1EBFt cho 400 th\xEC kh\xF4ng ph\u1EA3i n\u0103m nhu\u1EADn</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token comment">//chia h\u1EBFt cho 4 nh\u01B0ng kh\xF4ng chia h\u1EBFt cho 100 l\xE0 n\u0103m nhu\u1EADn</span>
                isLeap <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            isLeap <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>isLeap<span class="token operator">==</span><span class="token boolean">true</span><span class="token punctuation">)</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>year <span class="token operator">+</span> <span class="token string">&quot; l\xE0 n\u0103m nhu\u1EADn.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>year <span class="token operator">+</span> <span class="token string">&quot; kh\xF4ng ph\u1EA3i l\xE0 n\u0103m nhu\u1EADn.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details><h3 id="switch-case" tabindex="-1"><a class="header-anchor" href="#switch-case" aria-hidden="true">#</a> Switch..Case</h3><h4 id="\u0111oc-so-tu-0-\u0111en-10" tabindex="-1"><a class="header-anchor" href="#\u0111oc-so-tu-0-\u0111en-10" aria-hidden="true">#</a> \u0110\u1ECDc s\u1ED1 t\u1EEB 0 \u0111\u1EBFn 10</h4><p>Nh\u1EADp v\xE0o s\u1ED1 a, n\u1EBFu 0&lt;=a&lt;=10 xu\u1EA5t ra ph\xE1t \xE2m c\u1EE7a s\u1ED1 \u0111\xF3, ng\u01B0\u1EE3c l\u1EA1i xu\u1EA5t ra &quot;khong doc duoc&quot;</p><details class="custom-container details"><summary>B\xE0i gi\u1EA3i</summary><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CauLenhReNhanh</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> a<span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//nh\u1EADp v\xE0o s\u1ED1 a, n\u1EBFu 0&lt;=a&lt;=10 xu\u1EA5t ra ph\xE1t \xE2m c\u1EE7a s\u1ED1 \u0111\xF3, ng\u01B0\u1EE3c l\u1EA1i xu\u1EA5t ra &quot;khong doc duoc&quot;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Khong&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Mot&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hai&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Ba&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Bon&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Nam&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Sau&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">7</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Bay&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">8</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Tam&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">9</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Chin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">10</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Muoi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Khong doc duoc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details><h2 id="video-bai-giang" tabindex="-1"><a class="header-anchor" href="#video-bai-giang" aria-hidden="true">#</a> Video b\xE0i gi\u1EA3ng</h2><hr>`,16),h=n("iframe",{width:"100%",height:"450",src:"https://www.youtube.com/embed/TZ7O5JL35zk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1);function d(m,g){return a(),t("div",null,[e,n("div",c,[(a(),t("svg",l,k)),i]),r,h])}var w=p(o,[["render",d],["__file","session3.html.vue"]]);export{w as default};
