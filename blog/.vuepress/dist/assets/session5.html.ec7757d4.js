import{_ as i,o as n,c as e,d as t,e as r,b as s}from"./app.be380e2e.js";const a={},o=t("h1",{id:"stored-procedures",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#stored-procedures","aria-hidden":"true"},"#"),r(" Stored Procedures")],-1),h=t("p",null,[r("N\u1ED9i dung: "),t("br")],-1),c=t("ul",null,[t("li",null,"T\u1ED5ng quan SQL Stored Procedures"),t("li",null,"L\xE0m vi\u1EC7c v\u1EDBi stored procedures")],-1),u=t("h2",{id:"_1-gioi-thieu",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-gioi-thieu","aria-hidden":"true"},"#"),r(" 1. Gi\u1EDBi thi\u1EC7u")],-1),g={class:"custom-container info"},l={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},p=t("path",{d:"M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z",style:{fill:"#157ffb","fill-rule":"nonzero"},transform:"translate(-1.257 -1.257) scale(1.0582)"},null,-1),d=[p],m=t("p",{class:"custom-container-title"},"INFO",-1),_=t("ul",null,[t("li",null,[t("strong",null,"Stored Procedure"),r(" l\u01B0u tr\u1EEF m\u1ED9t t\u1EADp h\u1EE3p c\xE1c c\xE2u l\u1EC7nh SQL v\xE0 c\xE1c c\xE2u l\u1EC7nh l\u1EADp tr\xECnh \u0111i k\xE8m trong c\u01A1 s\u1EDF d\u1EEF li\u1EC7u, cho ph\xE9p t\xE1i s\u1EED d\u1EE5ng khi c\u1EA7n.")]),t("li",null,"H\u1ED7 tr\u1EE3 c\xE1c \u1EE9ng d\u1EE5ng t\u01B0\u01A1ng t\xE1c nhanh, ch\xEDnh x\xE1c")],-1),b=s('<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_1.png?raw=true" alt="pic1"></p><p><strong>C\xE1c thu\u1EADn l\u1EE3i</strong></p><ul><li>Stored procedure cho ph\xE9p \u0111i\u1EC1u ch\u1EC9nh ch\u01B0\u01A1ng tr\xECnh cho ph\xF9 h\u1EE3p, mang t\xEDnh t\xE1i s\u1EED d\u1EE5ng.</li><li>Stored procedure cho ph\xE9p th\u1EF1c thi nhanh h\u01A1n c\xE1ch vi\u1EBFt t\u1EEBng c\xE2u l\u1EC7nh sql</li><li>Stored procedure l\xE0m gi\u1EA3m b\u1EDBt v\u1EA5n \u0111\u1EC1 k\u1EB9t \u0111\u01B0\u1EDDng truy\u1EC1n m\u1EA1ng, d\u1EEF li\u1EC7u \u0111\u01B0\u1EE3c g\u1EDFi theo g\xF3i.</li><li>Stored procedure c\xF3 th\u1EC3 s\u1EED d\u1EE5ng trong v\u1EA5n \u0111\u1EC1 b\u1EA3o m\u1EADt, ph\xE2n quy\u1EC1n</li></ul><p><strong>C\xF3 2 lo\u1EA1i</strong></p><ul><li>System stored procedures</li><li>User stored procedures</li></ul><p><strong>Stored-procedure trong SQL Server bao g\u1ED3m:</strong></p><ul><li>Inputs: nh\u1EADn c\xE1c tham s\u1ED1 \u0111\u1EA7u v\xE0o khi c\u1EA7n</li><li>Execution: k\u1EBFt h\u1EE3p gi\u1EEFa c\xE1c y\xEAu c\u1EA7u nghi\u1EC7p v\u1EE5 v\u1EDBi c\xE1c l\u1EC7nh l\u1EADp tr\xECnh nh\u01B0 IF..ELSE, WHILE...</li><li>Outputs: tr\u1EA3 ra c\xE1c \u0111\u01A1n gi\xE1 tr\u1ECB (s\u1ED1, chu\u1ED7i\u2026) ho\u1EB7c m\u1ED9t t\u1EADp k\u1EBFt qu\u1EA3. <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_2.png?raw=true" alt="pic1"></li></ul><p><strong>V\xED d\u1EE5</strong><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_3.png?raw=true" alt="pic1"></p><hr><h2 id="_2-tao-stored-procedure" tabindex="-1"><a class="header-anchor" href="#_2-tao-stored-procedure" aria-hidden="true">#</a> 2. T\u1EA1o Stored-procedure</h2><p><strong>C\xFA ph\xE1p</strong><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_4.png?raw=true" alt="pic1"></p>',11),v={class:"custom-container tip"},w={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},f=t("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),S=t("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),q=[f,S],k=t("p",{class:"custom-container-title"},"TIP",-1),x=t("ul",null,[t("li",null,"T\xEAn h\xE0m, t\xEAn bi\u1EBFn trong SQL Server kh\xF4ng ph\xE2n bi\u1EC7t hoa th\u01B0\u1EDDng."),t("li",null,"C\xF3 th\u1EC3 thay th\u1EBF Create Procedure b\u1EB1ng Create Proc"),t("li",null,[r("Tham s\u1ED1 \u0111\u1EA7u v\xE0o "),t("br"),r(" Tham s\u1ED1 b\u1EAFt bu\u1ED9c: b\u1EAFt bu\u1ED9c ph\u1EA3i truy\u1EC1n "),t("br"),r(" Tham s\u1ED1 tu\u1EF3 ch\u1ECDn: g\xE1n gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh, gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh n\u1EBFu kh\xF4ng g\u1ECDi.")])],-1),H=s('<p><strong>V\xED d\u1EE5</strong> <br> VD1: T\u1EA1o stored-procedure t\xEDnh t\u1ED5ng c\u1EE7a 2 s\u1ED1 nguy\xEAn <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_5.png?raw=true" alt="pic1"></p><p>VD2: T\u1EA1o stored-procedure t\xEDnh t\u1ED5ng c\u1EE7a 2 s\u1ED1 nguy\xEAn c\xF3 tham s\u1ED1 \u0111\u1EA7u ra <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_6.png?raw=true" alt="pic1"></p><p>T\u1EA1o stored-procedure c\xF3 return d\u1EEF li\u1EC7u <br><strong>C\xFA ph\xE1p</strong><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_7.png?raw=true" alt="pic1"></p><p><strong>V\xED d\u1EE5</strong><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_8.png?raw=true" alt="pic1"></p><p>Bi\xEAn d\u1ECBch v\xE0 g\u1ECDi th\u1EF1c thi m\u1ED9t stored-procedure <br></p><ul><li>Bi\xEAn d\u1ECBch : Ch\u1ECDn to\xE0n b\u1ED9 m\xE3 l\u1EC7nh T\u1EA1o storedprocedure =&gt; Nh\u1EA5n F5</li><li>G\u1ECDi th\u1EF1c thi m\u1ED9t store-Procedure \u0111\xE3 \u0111\u01B0\u1EE3c bi\xEAn d\u1ECBch b\u1EB1ng l\u1EC7nh exec <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_9.png?raw=true" alt="pic1"></li></ul><p><strong>V\xED d\u1EE5</strong><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_10.png?raw=true" alt="pic1"></p><p>L\xE0m vi\u1EC7c v\u1EDBi th\u1EE7 t\u1EE5c c\xF3 tham s\u1ED1 m\u1EB7c \u0111\u1ECBnh <br><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_11.png?raw=true" alt="pic1"></p><h2 id="_3-cap-nhat-store-procedure" tabindex="-1"><a class="header-anchor" href="#_3-cap-nhat-store-procedure" aria-hidden="true">#</a> 3. C\u1EADp nh\u1EADt Store procedure</h2><p><strong>C\xFA ph\xE1p</strong><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_12.png?raw=true" alt="pic1"></p><p><strong>V\xED d\u1EE5</strong><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_13.png?raw=true" alt="pic1"></p><p><strong>L\u1EC7nh x\xF3a Procedure</strong><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_14.png?raw=true" alt="pic1"></p><h2 id="_4-lenh-\u0111ieu-kien-trong-\u0111ieu-khien-cac-re-nhanh-trong-proc" tabindex="-1"><a class="header-anchor" href="#_4-lenh-\u0111ieu-kien-trong-\u0111ieu-khien-cac-re-nhanh-trong-proc" aria-hidden="true">#</a> 4. L\u1EC7nh \u0111i\u1EC1u ki\u1EC7n trong \u0111i\u1EC1u khi\u1EC3n c\xE1c r\u1EBD nh\xE1nh trong Proc</h2><p><strong>S\u1EED d\u1EE5ng c\xE2u l\u1EC7nh \u0111i\u1EC1u ki\u1EC7n gi\xFAp \u0111i\u1EC1u khi\u1EC3n c\xE1c r\u1EBD nh\xE1nh trong Proc</strong><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_15.png?raw=true" alt="pic1"></p><p><strong>X\xE9t v\xED d\u1EE5 tr\u01B0\u1EDBc v\u1EC1 vi\u1EC7c th\xEAm ph\xF2ng ban, ki\u1EC3m tra Maphg c\xF3 t\u1ED3n t\u1EA1i hay ch\u01B0a</strong><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_16.png?raw=true" alt="pic1"></p><h2 id="_5-store-procedure-template" tabindex="-1"><a class="header-anchor" href="#_5-store-procedure-template" aria-hidden="true">#</a> 5. Store procedure template</h2><p><strong>S\u1EED d\u1EE5ng c\xF4ng c\u1EE5 t\u1EA1o store proc d\u01B0\u1EDBi d\u1EA1ng template</strong><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_17.png?raw=true" alt="pic1"></p><p><strong>V\xED d\u1EE5</strong><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_18.png?raw=true" alt="pic1"></p><h2 id="_6-kien-thuc-them" tabindex="-1"><a class="header-anchor" href="#_6-kien-thuc-them" aria-hidden="true">#</a> 6. Ki\u1EBFn th\u1EE9c th\xEAm</h2><p><strong>D\xF9ng c\xF4ng c\u1EE5 Execute a Store procedure</strong><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_19.png?raw=true" alt="pic1"></p><p><strong>System Store procedure</strong></p><ul><li><p>L\xE0 nh\u1EEFng stored procedure ch\u1EE9a trong Master Database, th\u01B0\u1EDDng b\u1EAFt \u0111\u1EA7u b\u1EB1ng ti\u1EBFp \u0111\u1EA7u ng\u1EEF sp_</p></li><li><p>Ch\u1EE7 y\u1EBFu d\xF9ng trong vi\u1EC7c qu\u1EA3n l\xFD c\u01A1 s\u1EDF d\u1EEF li\u1EC7u (administration) v\xE0 b\u1EA3o m\u1EADt (security).</p></li><li><p>V\xED d\u1EE5: sp_helptext &lt;t\xEAn c\u1EE7a \u0111\u1ED1i t\u01B0\u1EE3ng&gt; : \u0111\u1EC3 l\u1EA5y \u0111\u1ECBnh ngh\u0129a c\u1EE7a \u0111\u1ED1i t\u01B0\u1EE3ng (th\xF4ng s\u1ED1 t\xEAn \u0111\u1ED1i t\u01B0\u1EE3ng truy\u1EC1n v\xE0o) trong Database <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_20.png?raw=true" alt="pic1"></p></li><li><p>M\u1ED9t s\u1ED1 System stored procedures th\xF4ng d\u1EE5ng <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_21.png?raw=true" alt="pic1"></p></li></ul>',22);function y(C,V){return n(),e("div",null,[o,h,c,u,t("div",g,[(n(),e("svg",l,d)),m,_]),b,t("div",v,[(n(),e("svg",w,q)),k,x]),H])}var L=i(a,[["render",y],["__file","session5.html.vue"]]);export{L as default};
