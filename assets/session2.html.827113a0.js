import{_ as n,o as a,c as s,b as t}from"./app.be380e2e.js";const p={},o=t(`<h1 id="bai-2-components-autowired-va-bean" tabindex="-1"><a class="header-anchor" href="#bai-2-components-autowired-va-bean" aria-hidden="true">#</a> B\xE0i 2. Components, Autowired v\xE0 Bean</h1><h3 id="gioi-thieu" tabindex="-1"><a class="header-anchor" href="#gioi-thieu" aria-hidden="true">#</a> Gi\u1EDBi thi\u1EC7u</h3><p>\u0110\xE2y l\xE0 b\xE0i gi\u1EDBi thi\u1EC7u v\u1EC1 2 Annotation c\u01A1 b\u1EA3n trong Spring Boot v\xE0 <code>@Component</code> v\xE0 <code>@Autowire</code>, \u0111\u1EC3 c\xF3 th\u1EC3 hi\u1EC3u ph\u1EA7n n\xE0y t\u1ED1t nh\u1EA5t, b\u1EA1n n\xEAn n\u1EAFm ch\u1EAFc 2 kh\xE1i ni\u1EC7m sau:</p><h3 id="cach-chay-ung-dung-spring-boot" tabindex="-1"><a class="header-anchor" href="#cach-chay-ung-dung-spring-boot" aria-hidden="true">#</a> C\xE1ch ch\u1EA1y \u1EE9ng d\u1EE5ng Spring Boot</h3><p>N\u1EBFu trong <code>Java</code> truy\u1EC1n th\u1ED1ng, khi ch\u1EA1y c\u1EA3 m\u1ED9t project, ch\xFAng ta s\u1EBD ph\u1EA3i \u0111\u1ECBnh ngh\u0129a m\u1ED9t h\xE0m <code>main()</code> v\xE0 \u0111\u1EC3 n\xF3 kh\u1EDFi ch\u1EA1y \u0111\u1EA7u ti\xEAn.</p><p>Th\xEC <strong>Spring Boot</strong> c\u0169ng v\u1EADy, ch\xFAng ta s\u1EBD ph\u1EA3i ch\u1EC9 cho <strong>Spring Boot</strong> bi\u1EBFt n\u01A1i n\xF3 kh\u1EDFi ch\u1EA1y l\u1EA7n \u0111\u1EA7u, \u0111\u1EC3 n\xF3 c\xE0i \u0111\u1EB7t m\u1ECDi th\u1EE9.</p><p>C\xE1ch th\u1EF1c hi\u1EC7n l\xE0 th\xEAm annotation <code>@SpringBootApplication</code> tr\xEAn class ch\xEDnh v\xE0 g\u1ECDi <code>SpringApplication.run(App.class, args);</code> \u0111\u1EC3 ch\u1EA1y project.</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationContext</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>SpringApplication.run(App.class, args)</code> ch\xEDnh l\xE0 c\xE2u l\u1EC7nh \u0111\u1EC3 t\u1EA1o ra <strong><em>container</em></strong>. Sau \u0111\xF3 n\xF3 t\xECm to\xE0n b\u1ED9 c\xE1c <strong><em>dependency</em></strong> trong project c\u1EE7a b\u1EA1n v\xE0 \u0111\u01B0a v\xE0o \u0111\xF3.</p><p>Spring \u0111\u1EB7t t\xEAn cho <strong><em>container</em></strong> l\xE0 <code>ApplicationContext</code></p><p>v\xE0 \u0111\u1EB7t t\xEAn cho c\xE1c <strong><em>dependency</em></strong> l\xE0 <code>Bean</code></p><p><em>App.java</em></p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ApplicationContext ch\u1EE9a to\xE0n b\u1ED9 dependency trong project.</span>
        <span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>V\u1EADy l\xE0m sao Spring bi\u1EBFt \u0111\xE2u l\xE0 <em>dependency</em>? Ch\xFAng ta t\u1EDBi v\u1EDBi kh\xE1i ni\u1EC7m <code>@Component</code></p><h3 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> @Component</h3><p><code>@Component</code> l\xE0 m\u1ED9t <a href="">Annotation</a> (ch\xFA th\xEDch) \u0111\xE1nh d\u1EA5u tr\xEAn c\xE1c <code>Class</code> \u0111\u1EC3 gi\xFAp <strong>Spring</strong> bi\u1EBFt n\xF3 l\xE0 m\u1ED9t <code>Bean</code>.</p><p>V\xED d\u1EE5:</p><p>C\u1EA5u tr\xFAc th\u01B0 m\u1EE5c:</p><p>Ch\xFAng ta c\xF3 m\u1ED9t interface <code>Outfit</code></p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>implement n\xF3 l\xE0 Class <code>Bikini</code></p><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/*
 \u0110\xE1nh d\u1EA5u class b\u1EB1ng @Component
 Class n\xE0y s\u1EBD \u0111\u01B0\u1EE3c Spring Boot hi\u1EC3u l\xE0 m\u1ED9t Bean (ho\u1EB7c dependency)
 V\xE0 s\u1EBD \u0111\u01B0\u1EE3c Spring Boot qu\u1EA3n l\xFD
*/</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bikini</span> <span class="token keyword">implements</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;M\u1EB7c bikini&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Ch\u1EA1y ch\u01B0\u01A1ng tr\xECnh, v\xE0 xem k\u1EBFt qu\u1EA3:</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ApplicationContext ch\xEDnh l\xE0 container, ch\u1EE9a to\xE0n b\u1ED9 c\xE1c Bean</span>
        <span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Khi ch\u1EA1y xong, l\xFAc n\xE0y context s\u1EBD ch\u1EE9a c\xE1c Bean c\xF3 \u0111\xE1nh</span>
        <span class="token comment">// d\u1EA5u @Component.</span>

        <span class="token comment">// L\u1EA5y Bean ra b\u1EB1ng c\xE1ch</span>
        <span class="token class-name">Outfit</span> outfit <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Outfit</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// In ra \u0111\u1EC3 xem th\u1EED n\xF3 l\xE0 g\xEC</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Instance: &quot;</span> <span class="token operator">+</span> outfit<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// x\xE0i h\xE0m wear()</span>
        outfit<span class="token punctuation">.</span><span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Output:</p><div class="language-text ext-text"><pre class="language-text"><code>[1] Instance: me.loda.spring.helloworld.Bikini@1e1f6d9d
[2] M\u1EB7c bikini
</code></pre></div><p>B\u1EA1n s\u1EBD th\u1EA5y <code>Outfit</code> l\xFAc n\xE0y ch\xEDnh l\xE0 <code>Bikini</code>. Class \u0111\xE3 \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u l\xE0 <code>@Component</code>.</p><p><strong>Spring Boot</strong> khi ch\u1EA1y s\u1EBD d\xF2 t\xECm to\xE0n b\u1ED9 c\xE1c <em>Class c\xF9ng c\u1EA5p</em> ho\u1EB7c \u1EDF trong c\xE1c <em>package th\u1EA5p h\u01A1n</em> (Ch\xFAng ta c\xF3 th\u1EC3 c\u1EA5u h\xECnh vi\u1EC7c t\xECm ki\u1EBFm n\xE0y, s\u1EBD \u0111\u1EC1 c\u1EADp sau). Trong qu\xE1 tr\xECnh d\xF2 t\xECm n\xE0y, khi g\u1EB7p m\u1ED9t class \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u <code>@Component</code> th\xEC n\xF3 s\u1EBD t\u1EA1o ra m\u1ED9t instance v\xE0 \u0111\u01B0a v\xE0o <code>ApplicationContext</code> \u0111\u1EC3 qu\u1EA3n l\xFD.</p><p>Qu\xE1 tr\xECnh ch\u1EA1y s\u1EBD nh\u01B0 sau:</p><h3 id="autowired" tabindex="-1"><a class="header-anchor" href="#autowired" aria-hidden="true">#</a> @Autowired</h3><p>B\xE2y gi\u1EDD m\xECnh t\u1EA1o ra m\u1ED9t Class <code>Girl</code> v\xE0 c\xF3 m\u1ED9t thu\u1ED9c t\xEDnh l\xE0 <code>Outfit</code>.</p><p>M\xECnh c\u0169ng \u0111\xE1nh d\u1EA5u <code>Girl</code> l\xE0 m\u1ED9t <code>@Component</code>. T\u1EE9c <strong>Spring Boot</strong> c\u1EA7n t\u1EA1o ra m\u1ED9t instance c\u1EE7a <code>Girl</code> \u0111\u1EC3 qu\u1EA3n l\xFD.</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Girl</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">Outfit</span> outfit<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Girl</span><span class="token punctuation">(</span><span class="token class-name">Outfit</span> outfit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>outfit <span class="token operator">=</span> outfit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// GET </span>
    <span class="token comment">// SET</span>
<span class="token punctuation">}</span>

</code></pre></div><p>T\xF4i \u0111\xE1nh d\u1EA5u thu\u1ED9c t\xEDnh <code>Outfit</code> c\u1EE7a <code>Girl</code> b\u1EDFi Annotation <code>@Autowired</code>. \u0110i\u1EC1u n\xE0y n\xF3i v\u1EDBi <strong>Spring Boot</strong> h\xE3y t\u1EF1 <em>inject</em> (ti\xEAm) m\u1ED9t instance c\u1EE7a <code>Outfit</code> v\xE0o thu\u1ED9c t\xEDnh n\xE0y khi kh\u1EDFi t\u1EA1o <code>Girl</code>.</p><p>L\xFAc n\xE0y, ch\u1EA1y th\u1EED ch\u01B0\u01A1ng tr\xECnh.</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ApplicationContext ch\xEDnh l\xE0 container, ch\u1EE9a to\xE0n b\u1ED9 c\xE1c Bean</span>
        <span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Khi ch\u1EA1y xong, l\xFAc n\xE0y context s\u1EBD ch\u1EE9a c\xE1c Bean c\xF3 \u0111\xE1nh</span>
        <span class="token comment">// d\u1EA5u @Component.</span>

        <span class="token comment">// L\u1EA5y Bean ra b\u1EB1ng c\xE1ch</span>
        <span class="token class-name">Outfit</span> outfit <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Outfit</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// In ra \u0111\u1EC3 xem th\u1EED n\xF3 l\xE0 g\xEC</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Output Instance: &quot;</span> <span class="token operator">+</span> outfit<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// x\xE0i h\xE0m wear()</span>
        outfit<span class="token punctuation">.</span><span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Girl</span> girl <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Girl</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Girl Instance: &quot;</span> <span class="token operator">+</span> girl<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Girl Outfit: &quot;</span> <span class="token operator">+</span> girl<span class="token punctuation">.</span>outfit<span class="token punctuation">)</span><span class="token punctuation">;</span>

        girl<span class="token punctuation">.</span>outfit<span class="token punctuation">.</span><span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Output:</p><div class="language-text ext-text"><pre class="language-text"><code>[1] Output Instance: me.loda.spring.helloworld.Bikini@2e16f13a
[2] M\u1EB7c bikini
[3] Girl Instance: me.loda.spring.helloworld.Girl@353cb1cb
[4] Girl Outfit: me.loda.spring.helloworld.Bikini@2e16f13a
[5] M\u1EB7c bikini
</code></pre></div><p><strong>Spring Boot</strong> \u0111\xE3 t\u1EF1 t\u1EA1o ra m\u1ED9t <code>Girl</code> v\xE0 trong qu\xE1 tr\xECnh t\u1EA1o ra \u0111\xF3, n\xF3 truy\u1EC1n <code>Outfit</code> v\xE0o l\xE0m thu\u1ED9c t\xEDnh.</p><h3 id="singleton" tabindex="-1"><a class="header-anchor" href="#singleton" aria-hidden="true">#</a> Singleton</h3><p>\u0110i\u1EC1u \u0111\u1EB7c bi\u1EC7t l\xE0 c\xE1c <code>Bean</code> \u0111\u01B0\u1EE3c qu\u1EA3n l\xFD b\xEAn trong <code>ApplicationContext</code> \u0111\u1EC1u l\xE0 singleton. B\u1EA1n ch\u1EAFc \u0111\xE3 \u0111\u1EC3 \xFD \u0111i\u1EC1u n\xE0y t\u1EEB c\xE1c Output \u1EDF ph\xEDa tr\xEAn.</p><div class="language-text ext-text"><pre class="language-text"><code>[1] Output Instance: me.loda.spring.helloworld.Bikini@2e16f13a

[4] Girl Outfit: me.loda.spring.helloworld.Bikini@2e16f13a
</code></pre></div><p><code>Outfit</code> \u1EDF 2 \u0111\u1ED1i t\u01B0\u1EE3ng tr\xEAn l\xE0 m\u1ED9t.</p><p>T\u1EA5t c\u1EA3 nh\u1EEFng <code>Bean</code> \u0111\u01B0\u1EE3c qu\u1EA3n l\xFD trong <code>ApplicationContext</code> \u0111\u1EC1u ch\u1EC9 \u0111\u01B0\u1EE3c t\u1EA1o ra <strong>m\u1ED9t l\u1EA7n duy nh\u1EA5t</strong> v\xE0 khi c\xF3 <code>Class</code> y\xEAu c\u1EA7u <code>@Autowired</code> th\xEC n\xF3 s\u1EBD l\u1EA5y \u0111\u1ED1i t\u01B0\u1EE3ng c\xF3 s\u1EB5n trong <code>ApplicationContext</code> \u0111\u1EC3 <em>inject</em> v\xE0o.</p><p>Trong tr\u01B0\u1EDDng h\u1EE3p b\u1EA1n mu\u1ED1n m\u1ED7i l\u1EA7n s\u1EED d\u1EE5ng l\xE0 m\u1ED9t instance ho\xE0n to\xE0n m\u1EDBi. Th\xEC h\xE3y \u0111\xE1nh d\u1EA5u <code>@Component</code> \u0111\xF3 b\u1EB1ng <code>@Scope(&quot;prototype&quot;)</code></p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Scope</span><span class="token punctuation">(</span><span class="token string">&quot;prototype&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bikini</span> <span class="token keyword">implements</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;M\u1EB7c bikini&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="ket" tabindex="-1"><a class="header-anchor" href="#ket" aria-hidden="true">#</a> K\u1EBFt</h3><p>T\u1EDBi \u0111\xE2y b\u1EA1n \u0111\xE3 ti\u1EBFp c\u1EADn v\u1EDBi hai kh\xE1i ni\u1EC7m c\u01A1 b\u1EA3n nh\u1EA5t trong <strong>Spring Boot</strong> v\xE0 c\u0169ng l\xE0 n\u1EC1n t\u1EA3ng c\u1ED1t l\xF5i c\u1EE7a n\xF3. Vi\u1EC7c n\u1EAFm \u0111\u01B0\u1EE3c c\xE1ch v\u1EADn h\xE0nh c\u1EE7a <code>@Component</code> v\xE0 <code>@Autowired</code> l\xE0 b\u1EA1n \u0111\xE3 \u0111i \u0111\u01B0\u1EE3c n\u1EEDa ch\u1EB7ng \u0111\u01B0\u1EDDng r\u1ED3i.</p><hr><h3 id="cach-autowired-van-hanh" tabindex="-1"><a class="header-anchor" href="#cach-autowired-van-hanh" aria-hidden="true">#</a> C\xE1ch @Autowired v\u1EADn h\xE0nh</h3><p><code>@Autowired</code> \u0111\xE1nh d\u1EA5u cho Spring bi\u1EBFt r\u1EB1ng s\u1EBD t\u1EF1 \u0111\u1ED9ng inject bean t\u01B0\u01A1ng \u1EE9ng v\xE0o v\u1ECB tr\xED \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u.</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Girl</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u0110\xE1nh d\u1EA5u \u0111\u1EC3 Spring inject m\u1ED9t \u0111\u1ED1i t\u01B0\u1EE3ng Outfit v\xE0o \u0111\xE2y</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">Outfit</span> outfit<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Girl</span><span class="token punctuation">(</span><span class="token class-name">Outfit</span> outfit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>outfit <span class="token operator">=</span> outfit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// GET</span>
    <span class="token comment">// SET</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Tuy nhi\xEAn, qu\xE1 tr\xECnh <code>@Autowired</code> n\xE0y \u0111\xF2i h\u1ECFi m\u1ED9t \u0111i\u1EC1u ki\u1EC7n l\xE0 Class \u0111\xF3 ph\u1EA3i c\xF3 <code>Constructor</code> ho\u1EB7c <code>Setter</code> cho thu\u1ED9c t\xEDnh c\u1EA7n inject.</p><p>Nh\u01B0 v\xED d\u1EE5 \u1EDF tr\xEAn t\xF4i \u0111\xE3 s\u1EED d\u1EE5ng m\u1ED9t Constructor l\xE0 <code>public Girl(Outfit outfit)</code> \u0111\u1EC3 <strong>Spring</strong> c\xF3 th\u1EC3 truy\u1EC1n gi\xE1 tr\u1ECB <code>Outfit</code> v\xE0o b\xEAn trong <code>Girl</code>. N\u1EBFu b\u1ECF Constructor n\xE0y \u0111\xED, b\u1EA1n b\u1EAFt bu\u1ED9c ph\u1EA3i cung c\u1EA5p cho class Girl m\u1ED9t h\xE0m <code>Setter</code> thay th\u1EBF.</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Girl</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u0110\xE1nh d\u1EA5u \u0111\u1EC3 Spring inject m\u1ED9t \u0111\u1ED1i t\u01B0\u1EE3ng Outfit v\xE0o \u0111\xE2y</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">Outfit</span> outfit<span class="token punctuation">;</span>

    <span class="token comment">// Spring s\u1EBD inject outfit th\xF4ng qua Constructor tr\u01B0\u1EDBc</span>
    <span class="token keyword">public</span> <span class="token class-name">Girl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>


    <span class="token comment">// N\u1EBFu kh\xF4ng t\xECm th\u1EA5y Constructor tho\u1EA3 m\xE3n, n\xF3 s\u1EBD th\xF4ng qua setter</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setOutfit</span><span class="token punctuation">(</span><span class="token class-name">Outfit</span> outfit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>outfit <span class="token operator">=</span> outfit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// GET</span>
    <span class="token comment">// SET</span>
<span class="token punctuation">}</span>

</code></pre></div><p>B\u1EA1n c\u0169ng c\xF3 th\u1EC3 g\u1EAFn <code>@Autowired</code> l\xEAn tr\xEAn method, thay v\xEC thu\u1ED9c t\xEDnh, ch\u1EE9c n\u0103ng c\u0169ng v\u1EABn t\u01B0\u01A1ng t\u1EF1, n\xF3 s\u1EBD t\xECm Bean ph\xF9 h\u1EE3p v\u1EDBi method \u0111\xF3 v\xE0 truy\u1EC1n v\xE0o.</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Girl</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u0110\xE1nh d\u1EA5u \u0111\u1EC3 Spring inject m\u1ED9t \u0111\u1ED1i t\u01B0\u1EE3ng Outfit v\xE0o \u0111\xE2y</span>
    <span class="token class-name">Outfit</span> outfit<span class="token punctuation">;</span>

    <span class="token comment">// Spring s\u1EBD inject outfit th\xF4ng qua Constructor tr\u01B0\u1EDBc</span>
    <span class="token keyword">public</span> <span class="token class-name">Girl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Autowired</span>
    <span class="token comment">// N\u1EBFu kh\xF4ng t\xECm th\u1EA5y Constructor tho\u1EA3 m\xE3n, n\xF3 s\u1EBD th\xF4ng qua setter</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setOutfit</span><span class="token punctuation">(</span><span class="token class-name">Outfit</span> outfit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>outfit <span class="token operator">=</span> outfit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// GET</span>
    <span class="token comment">// SET</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="van-\u0111e-cua-autowired" tabindex="-1"><a class="header-anchor" href="#van-\u0111e-cua-autowired" aria-hidden="true">#</a> V\u1EA5n \u0111\u1EC1 c\u1EE7a @Autowired</h3><p>Trong th\u1EF1c t\u1EBF, s\u1EBD c\xF3 tr\u01B0\u1EDDng h\u1EE3p ch\xFAng ta s\u1EED d\u1EE5ng <code>@Autowired</code> khi <strong>Spring Boot</strong> c\xF3 ch\u1EE9a 2 Bean c\xF9ng lo\u1EA1i trong Context.</p><p>L\xFAc n\xE0y th\xEC <strong>Spring</strong> s\u1EBD b\u1ED1i r\u1ED1i v\xE0 kh\xF4ng bi\u1EBFt s\u1EED d\u1EE5ng Bean n\xE0o \u0111\u1EC3 inject v\xE0o \u0111\u1ED1i t\u01B0\u1EE3ng.</p><p>V\xED d\u1EE5:</p><p>Class <code>Outfit</code> c\xF3 2 k\u1EBF th\u1EEBa l\xE0 <code>Bikini</code> v\xE0 <code>Naked</code></p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
 \u0110\xE1nh d\u1EA5u class b\u1EB1ng @Component
 Class n\xE0y s\u1EBD \u0111\u01B0\u1EE3c Spring Boot hi\u1EC3u l\xE0 m\u1ED9t Bean (ho\u1EB7c dependency)
 V\xE0 s\u1EBD \u0111\u01B0\u1EE3c Spring Boot qu\u1EA3n l\xFD
  */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bikini</span> <span class="token keyword">implements</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;M\u1EB7c bikini&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Naked</span> <span class="token keyword">implements</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u0110ang kh\xF4ng m\u1EB7c g\xEC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Class <code>Girl</code> y\xEAu c\u1EA7u inject m\u1ED9t <code>Outfit</code> v\xE0o cho m\xECnh.</p><div class="language-java ext-java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Girl</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">Outfit</span> outfit<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Girl</span><span class="token punctuation">(</span><span class="token class-name">Outfit</span> outfit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>outfit <span class="token operator">=</span> outfit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// GET</span>
    <span class="token comment">// SET</span>
<span class="token punctuation">}</span>
</code></pre></div><p>L\xFAc n\xE0y khi ch\u1EA1y ch\u01B0\u01A1ng tr\xECnh. <strong>Spring Boot</strong> s\u1EBD b\xE1o l\u1ED7i nh\u01B0 sau.</p><p>Output:</p><div class="language-text ext-text"><pre class="language-text"><code>***************************
APPLICATION FAILED TO START
***************************

Description:

Parameter 0 of constructor in me.loda.spring.helloprimaryqualifier.Girl required a single bean, but 2 were found:
	- bikini: defined in file [/Users/lv00141/Documents/WORKING_SPACE/GITHUB/spring-boot-learning/spring-boot-helloworld-@Primary - @Qualifier/target/classes/me/loda/spring/helloprimaryqualifier/Bikini.class]
	- naked: defined in file [/Users/lv00141/Documents/WORKING_SPACE/GITHUB/spring-boot-learning/spring-boot-helloworld-@Primary - @Qualifier/target/classes/me/loda/spring/helloprimaryqualifier/Naked.class]
</code></pre></div><p>\u0110\u1EA1i kh\xE1i l\xE0, trong qu\xE1 tr\xECnh c\xE0i \u0111\u1EB7t, n\xF3 t\xECm th\u1EA5y t\u1EDBi 2 \u0111\u1ED1i t\u01B0\u1EE3ng tho\u1EA3 m\xE3n <code>Outfit</code>. Gi\u1EDD n\xF3 kh\xF4ng bi\u1EBFt s\u1EED d\u1EE5ng c\xE1i n\xE0o \u0111\u1EC3 inject v\xE0o trong <code>Girl</code></p><h3 id="primary" tabindex="-1"><a class="header-anchor" href="#primary" aria-hidden="true">#</a> @Primary</h3><p>C\xE1ch gi\u1EA3i quy\u1EBFt th\u1EE9 nh\u1EA5t l\xE0 s\u1EED d\u1EE5ng Annotation <code>@Primary</code>.</p><p><code>@Primary</code> l\xE0 annotation \u0111\xE1nh d\u1EA5u tr\xEAn m\u1ED9t Bean, gi\xFAp n\xF3 <strong>lu\xF4n \u0111\u01B0\u1EE3c \u01B0u ti\xEAn l\u1EF1a</strong> ch\u1ECDn trong tr\u01B0\u1EDDng h\u1EE3p c\xF3 nhi\u1EC1u Bean c\xF9ng lo\u1EA1i trong Context.</p><p>Trong v\xED d\u1EE5 \u1EDF tr\xEAn, n\u1EBFu ch\xFAng ta \u0111\u1EC3 <code>Naked</code> l\xE0 primary. Th\xEC ch\u01B0\u01A1ng tr\xECnh s\u1EBD ch\u1EA1y b\xECnh th\u01B0\u1EDDng.</p><p>V\xE0 hi\u1EC3n nhi\xEAn <code>Outfit</code> b\xEAn trong <code>Girl</code> s\u1EBD l\xE0 <code>Naked</code>.</p><div class="language-java ext-java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Primary</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Naked</span> <span class="token keyword">implements</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u0110ang kh\xF4ng m\u1EB7c g\xEC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Ch\u1EA1y th\u1EED ch\u01B0\u01A1ng tr\xECnh:</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ApplicationContext ch\xEDnh l\xE0 container, ch\u1EE9a to\xE0n b\u1ED9 c\xE1c Bean</span>
        <span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Khi ch\u1EA1y xong, l\xFAc n\xE0y context s\u1EBD ch\u1EE9a c\xE1c Bean c\xF3 \u0111\xE1nh</span>
        <span class="token comment">// d\u1EA5u @Component.</span>

        <span class="token class-name">Girl</span> girl <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Girl</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Girl Instance: &quot;</span> <span class="token operator">+</span> girl<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Girl Outfit: &quot;</span> <span class="token operator">+</span> girl<span class="token punctuation">.</span>outfit<span class="token punctuation">)</span><span class="token punctuation">;</span>

        girl<span class="token punctuation">.</span>outfit<span class="token punctuation">.</span><span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Output:</p><div class="language-text ext-text"><pre class="language-text"><code>Girl Instance: me.loda.spring.helloprimaryqualifier.Girl@eb9a089
Girl Outfit: me.loda.spring.helloprimaryqualifier.Naked@1688653c
\u0110ang kh\xF4ng m\u1EB7c g\xEC
</code></pre></div><p><strong>Spring Boot</strong> \u0111\xE3 \u01B0u ti\xEAn <code>Naked</code> v\xE0 inject n\xF3 v\xE0o <code>Girl</code>.</p><h3 id="qualifier" tabindex="-1"><a class="header-anchor" href="#qualifier" aria-hidden="true">#</a> @Qualifier</h3><p>C\xE1ch th\u1EE9 hai, l\xE0 s\u1EED d\u1EE5ng Annotation <code>@Qualifier</code>.</p><p><code>@Qualifier</code> x\xE1c \u0111\u1ECBnh t\xEAn c\u1EE7a m\u1ED9t Bean m\xE0 b\u1EA1n mu\u1ED1n ch\u1EC9 \u0111\u1ECBnh inject.</p><p>V\xED d\u1EE5:</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span><span class="token punctuation">(</span><span class="token string">&quot;bikini&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bikini</span> <span class="token keyword">implements</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;M\u1EB7c bikini&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Component</span><span class="token punctuation">(</span><span class="token string">&quot;naked&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Naked</span> <span class="token keyword">implements</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u0110ang kh\xF4ng m\u1EB7c g\xEC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Girl</span> <span class="token punctuation">{</span>

    <span class="token class-name">Outfit</span> outfit<span class="token punctuation">;</span>

    <span class="token comment">// \u0110\xE1nh d\u1EA5u \u0111\u1EC3 Spring inject m\u1ED9t \u0111\u1ED1i t\u01B0\u1EE3ng Outfit v\xE0o \u0111\xE2y</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token class-name">Girl</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;naked&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Outfit</span> outfit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Spring s\u1EBD inject outfit th\xF4ng qua Constructor \u0111\u1EA7u ti\xEAn</span>
        <span class="token comment">// Ngo\xE0i ra, n\xF3 s\u1EBD t\xECm Bean c\xF3 @Qualifier(&quot;naked&quot;) trong context \u0111\u1EC3 \u1ECBnject</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>outfit <span class="token operator">=</span> outfit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// GET</span>
    <span class="token comment">// SET</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="ket-1" tabindex="-1"><a class="header-anchor" href="#ket-1" aria-hidden="true">#</a> K\u1EBFt</h3><p><code>@Primary</code> v\xE0 <code>@Qualifier</code> l\xE0 m\u1ED9t trong nh\u1EEFng t\xEDnh n\u0103ng b\u1EA1n n\xEAn bi\u1EBFt trong Spring \u0111\u1EC3 c\xF3 th\u1EC3 x\u1EED l\xFD v\u1EA5n \u0111\u1EC1 nhi\u1EC1u Bean c\xF9ng lo\u1EA1i trong m\u1ED9t Project.</p>`,87),c=[o];function e(i,l){return a(),s("div",null,c)}var k=n(p,[["render",e],["__file","session2.html.vue"]]);export{k as default};
