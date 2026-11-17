import {R,t,q} from './content.mjs';
import previous from './chapter10.mjs';

const chapter = {
id:10,title:'波动',en:'WAVES',stars:5,
subtitle:'从一个质点的振动，推到整列波的相位、能量与叠加。',
intro:'这一章只有一条主线：介质决定传播速度，波源决定频率；传播时间产生空间相位差；波函数经求导得到速度与能量，两列波再通过相位差合成。先建立这条联系，再记住各模型的条件。星级表示复习优先级，不代表老师承诺的分值。',
map:[
{title:'先定介质与波源',formula:R`u=\sqrt{\text{弹性量}/\text{惯性量}},\quad \lambda=u/\nu`,why:'弹性恢复作用传递扰动；波源规定每秒振动次数，二者共同决定波长。',href:'#10-medium'},
{title:'再把时间延迟写进振动',formula:R`y(x,t)=y(x_0,t-s(x-x_0)/u)`,why:'沿传播方向，相邻位置依次重复相同的振动状态；这一步产生波函数中的空间相位。',href:'#10-function'},
{title:'求导得到运动与能量',formula:R`v_y=\partial_t y,\quad I=\tfrac12\rho u\omega^2 A^2`,why:'时间导数是质点速度；空间导数描述形变；动能与弹性势能合起来构成能流。',href:'#10-energy'},
{title:'相位差决定叠加',formula:R`\Delta\varphi_P=\Delta\varphi_0-k\Delta r`,why:'先算传播后的相位差，再求合振幅；反射后的反向叠加形成驻波。',href:'#10-interference'},
{title:'边界筛选允许的波',formula:R`L=n\lambda_n/2\ \Rightarrow\ \nu_n=nu/(2L)`,why:'以两端固定弦为例，两个波节之间必须放下整数个半波长。',href:'#10-boundary'},
{title:'改变接收或传播的物理量',formula:R`\nu_O=\nu_S\frac{u+v_O}{u-v_S},\quad I_{\rm EM}=\tfrac12E_0H_0`,why:'移动源改变波面间距；移动观察者改变接收速率。电磁波以电磁场携带能量，继续使用波函数与能流的思想。',href:'#10-doppler'}
],
coverage:[
{source:'10-1 机械波的几个概念',topics:'波源与介质、横波与纵波、波面与波线、u–λ–ν、固体与流体声速、理想气体绝热声速',notes:'细杆与一般固体作条件区分；弦波速度列为常用模型补充。'},
{source:'10-2 平面简谐波的波函数',topics:'传播延迟、任意参考点、双周期、相位差、读图、质点速度与加速度、波动方程',notes:'波动方程标为推导补充；纠正“任知两个量均可求其余”的不独立参数表述。'},
{source:'10-3 波的能量与能流密度',topics:'动能与势能的由来、能量密度、能流与波强、平面/球面/柱面波、声强级',notes:'第5页势能式漏写的1/2按第4、6页一致表达更正；声强级公式补充说明课件的dB图表。'},
{source:'10-4 惠更斯原理、波的衍射和干涉',topics:'子波包络、衍射条件、相干条件、合振幅与合初相、强度分布、反射折射与全反射',notes:'明确相位差方向与初相差；合初相用正余弦分量求象限，避免课件分母路程下标误写。'},
{source:'10-5 驻波、半波损失',topics:'一般初相驻波、节点与相位、固定/自由端反射、驻波能量、简正模态',notes:'由边界方程推反射相位，不把所有界面当成固定端；位移与声压节点互换。'},
{source:'10-6 多普勒效应',topics:'观察者与波源运动的不同作用、正负号、回波两次变频、马赫角',notes:'限定介质参考系与亚声速；斜向题区分发射和接收时刻，未照搬忽略传播时延的飞越几何计算。'},
{source:'10-7 电磁波',topics:'E/H/B关系、介质波速与波阻抗、能量密度、坡印廷矢量、平均强度、电偶极远场振幅/角分布/总功率、频谱',notes:'由介质通式归到真空，区分峰值与有效值；偶极辐射列为课件拓展并明确远场条件。'}
],
topics:[
t('10-medium','模型起点：谁决定波速、频率和波长？',4,'10-1 第 1–19 页；弦波为常用模型补充',R`
<h4>1．把“振动”与“传播”分开</h4>
<p>机械波是振动状态在弹性介质中的传播。波源提供扰动，相邻介质元通过弹性作用依次响应；质点在平衡位置附近振动，波形和能量向前传递。横波的振动方向垂直传播方向，纵波的振动方向平行传播方向。等相位点组成波面；在各向同性介质中，传播方向（波线）垂直波面。</p>
<p>一个周期内，波形前进一个波长。因此不是四条独立公式，而是同一个传播事实的不同写法：</p>
$$\begin{aligned}uT&=\lambda, & \nu&=1/T,\\ \omega&=2\pi\nu, & k&=2\pi/\lambda,\\ u&=\lambda\nu=\omega/k.\end{aligned}$$
<p><strong>波源决定频率，介质及其状态决定波速，再由两者决定波长。</strong>波穿过静止界面时，界面两侧必须按同一节奏振动，所以频率不变；若波速改变，波长随之改变。这里讨论线性、无色散的理想模型；实际有色散时，波速还可能依赖频率。</p>
<h4>2．波速都来自“弹性恢复作用 ÷ 惯性”</h4>
<p>例如取弦上一小段 $\mathrm dx$。小斜率时，两端张力的横向分量之差约为 $F_T\,\mathrm dx\,\partial_x^2y$；弦元质量为 $\mu_\ell\mathrm dx$。牛顿第二定律于是给出：</p>
$$\mu_\ell\frac{\partial^2y}{\partial t^2}=F_T\frac{\partial^2y}{\partial x^2}.$$
<p>把行波 $y=f(x-ut)$ 代入，时间二阶导数是空间二阶导数的 $u^2$ 倍，故 $u^2=F_T/\mu_\ell$。其他介质也沿着“弹性力差提供介质元加速度”的思路，只是恢复作用与密度的定义不同：</p>
<div class="table-wrap"><table><thead><tr><th>模型与适用条件</th><th>波速</th><th>量的含义</th></tr></thead><tbody>
<tr><td>均匀、绷紧弦上的小振幅横波</td><td>$u=\sqrt{F_T/\mu_\ell}$</td><td>$F_T$ 为张力，$\mu_\ell$ 为线密度</td></tr>
<tr><td>细长均匀杆中的纵波（波长远大于横向尺度）</td><td>$u=\sqrt{Y/\rho}$</td><td>$Y$ 为杨氏模量，$\rho$ 为体密度</td></tr>
<tr><td>均匀固体的横向剪切波</td><td>$u=\sqrt{G/\rho}$</td><td>$G$ 为剪切模量</td></tr>
<tr><td>流体中的小振幅纵波</td><td>$u=\sqrt{K/\rho}$</td><td>$K=-V\,\mathrm dp/\mathrm dV$ 为相应过程的体积模量</td></tr>
</tbody></table></div>
<p>张力或弹性模量越大，扰动传得越快；密度越大，惯性越大，传播越慢。理想流体没有静态剪切恢复力，不能像固体那样传递体内剪切横波。$\sqrt{Y/\rho}$ 是细杆公式，不能无条件当作任意三维固体的纵波声速。</p>
<h4>3．为什么气体声速含有绝热指数？</h4>
<p>声波的压缩与膨胀很快，介质元来不及明显交换热量，采用绝热关系 $pV^\gamma=\text{常量}$。对它求导，再接上理想气体状态方程：</p>
$$\begin{aligned}\frac{\mathrm dp}{\mathrm dV}&=-\gamma p/V,\\ K&=-V\frac{\mathrm dp}{\mathrm dV}=\gamma p,\\ u&=\sqrt{\frac{\gamma p}{\rho}}=\sqrt{\frac{\gamma RT_{\rm abs}}{M}}.\end{aligned}$$
<p>$M$ 是气体摩尔质量，$T_{\rm abs}$ 必须用开尔文。对给定理想气体，温度升高声速增大；同温度下改变压强与密度，两者同比改变，$p/\rho$ 不变。空气在室温附近约为 $340\,\mathrm{m/s}$，只可作估计，计算应按题给数据。</p>`,
['先辨认弦、细杆、液体或气体，选对应的波速模型。','由波源取得频率，再用 λ=u/ν 求波长；过静止界面时先保留频率。','检查密度是 kg/m 还是 kg/m³，气体温度是否换为 K。'],R`$u$ 是波形传播速度；$v_y$ 是某个质点的振动速度。二者通常不同，甚至方向也不同。`),

t('10-function','波函数怎么来：把参考点的时间向后推',5,'10-2 第 1–9、15、19 页',R`
<h4>1．先写已知点的振动，再写传播所需的时间</h4>
<p>设 $x=x_0$ 处的振动是 $y_0(t)=A\cos(\omega t+\varphi_0)$，波沿 $+x$ 传播。$x$ 处现在的状态，就是参考点提前 $(x-x_0)/u$ 时的状态：</p>
$$\begin{aligned}y(x,t)&=y_0\!\left(t-\frac{x-x_0}{u}\right)\\ &=A\cos\!\left[\omega\left(t-\frac{x-x_0}{u}\right)+\varphi_0\right]\\ &=A\cos[\omega t-k(x-x_0)+\varphi_0].\end{aligned}$$
<p>负的时间差表示按已有稳态波函数向参考点上游延拓，不代表信息超前传播。若讨论波源刚刚启动，还要额外检查波是否已经到达该点。</p>
<p>把传播方向记为 $s=+1$（向右）或 $s=-1$（向左），两种情况便可统一：</p>
$$\boxed{y(x,t)=A\cos[\omega t-sk(x-x_0)+\varphi_0]}$$
<p>代回 $x=x_0$ 必须恢复题给振动。这个检查比死记“向右减、向左加”更可靠。若参考点方程给成 $A\cos[\omega(t-t_0)+\theta_0]$，就把其中的 $t$ 替换为 $t-s(x-x_0)/u$；不能漏掉 $t_0$。</p>
<h4>2．波函数有时间周期，也有空间周期</h4>
<p>固定 $x$：每个质点都是周期为 $T$ 的简谐振子；固定 $t$：同一时刻的空间图形每隔 $\lambda$ 重复。这就是“双周期性”。</p>
$$\begin{aligned}y(x,t+T)&=y(x,t),\\ y(x+\lambda,t)&=y(x,t),\\ y&=A\cos\!\left[2\pi\left(\frac{t}{T}-s\frac{x-x_0}{\lambda}\right)+\varphi_0\right].\end{aligned}$$
<h4>3．用等相位条件检查方向</h4>
<p>选定一个波峰，它的相位保持不变。因此 $\omega\,\mathrm dt-sk\,\mathrm dx=0$，得到：</p>
$$\frac{\mathrm dx}{\mathrm dt}=s\frac{\omega}{k}=su.$$
<p>例如 $\cos(kx-\omega t+\alpha)$ 也向 $+x$ 传播，因为它与 $\cos(\omega t-kx-\alpha)$ 等价。判断方向要看整个相位如何保持不变。</p>`,
['圈出参考点 x₀、振动方程与传播方向。','先写 y(x,t)=y₀[t−s(x−x₀)/u]，再展开空间相位。','代回参考点；再用等相位点的运动方向检查正负号。'],R`公式中的初相通常是坐标原点在 t=0 时的初相，不必等于任意参考点给出的初相。`,'wave'),

t('10-reading','从图读相位：位移、斜率、速度和加速度连起来',5,'10-2 第 7–14、21–32 页；波动方程为基础推导补充',R`
<h4>1．读图前先看横轴</h4>
<p><strong>波形图</strong>固定时刻 $t=t_0$、横轴是 $x$：读得 $A,\lambda$；<strong>振动图</strong>固定位置 $x=x_0$、横轴是 $t$：读得 $A,T$。一个快照本身通常不能同时确定传播方向和波速，必须结合箭头、质点速度或其他时刻的图。</p>
<p>以向右行波 $y=A\cos\psi$、$\psi=\omega t-kx+\varphi$ 为例，对同一个波函数求不同的导数：</p>
$$\begin{aligned}v_y=\frac{\partial y}{\partial t}&=-A\omega\sin\psi,\\ a_y=\frac{\partial^2y}{\partial t^2}&=-A\omega^2\cos\psi=-\omega^2y,\\ \frac{\partial y}{\partial x}&=Ak\sin\psi.\end{aligned}$$
<p>消去共同的 $\sin\psi$，就得到看图判断运动方向的规则：</p>
$$\boxed{v_y=-su\frac{\partial y}{\partial x}}$$
<p>向右传播时，空间斜率为正处质点向下，斜率为负处质点向上；向左传播相反。波峰处 $v_y=0$、$a_y<0$，波谷处 $v_y=0$、$a_y>0$，平衡位置处速度大小最大、加速度为零。</p>
<h4>2．初相必须同时满足位移和速度</h4>
<p>在图上选便于读数的 $(x_*,t_*)$，该点相位记为 $\theta_*$。用两条式子定象限，再还原原点初相：</p>
$$\begin{aligned}\cos\theta_*&=y_*/A,\\ \sin\theta_*&=-v_{y*}/(A\omega),\\ \varphi&=\theta_*-\omega t_*+skx_*\pmod{2\pi}.\end{aligned}$$
<p>若快照是 $t=2\,\mathrm s$，不能直接把快照中的常数相位当成 $t=0$ 初相。参数换算还可由 $v_{\max}=A\omega$、$a_{\max}=A\omega^2$ 得到 $\omega=a_{\max}/v_{\max}$、$A=v_{\max}^2/a_{\max}$。</p>
<h4>3．一个相位差公式串起时间与空间</h4>
$$\Delta\psi=\omega\Delta t-sk\Delta x.$$
<p>同一点：$\Delta\psi=\omega\Delta t$；同一时刻：$\Delta\psi=-sk\Delta x$。同相条件为 $\Delta\psi=2m\pi$，反相条件为 $\Delta\psi=(2m+1)\pi$。同一时刻同相的空间间距是整数倍波长；相位沿传播方向落后。</p>
<h4>4．补充：波动方程并不是质点的轨迹方程</h4>
<p>继续对空间求二阶导数得 $\partial_x^2y=-k^2y$；与 $\partial_t^2y=-\omega^2y$ 相除，利用 $u=\omega/k$：</p>
$$\boxed{\frac{\partial^2y}{\partial t^2}=u^2\frac{\partial^2y}{\partial x^2}}$$
<p>这是理想一维无色散波动的方程。它表示某处的加速度与波形的弯曲程度联系起来；一般的右行波 $f(x-ut)$、左行波 $g(x+ut)$ 及其和也满足它。不要把 $\mathrm dx/\mathrm dt=u$ 当作横波质点的运动方程。</p>`,
['判明横轴与快照时刻，读 A、λ 或 T。','由传播箭头和斜率确定质点速度方向；由 y 的正负确定加速度方向。','选参考点定相位象限，带上该点的 x 与 t，最后求导检查。'],R`T 与 ω 表示同一个信息，只知道它们不能求出 u 和 λ；“任给两个参数就能求其余”必须要求这两个参数相互独立。`),

t('10-energy','能量链：质点速度 → 形变 → 能量密度 → 波强',4,'10-3 第 1–14 页；声强级公式为课件图表补充',R`
<h4>1．势能取决于形变，不是介质元的绝对位移</h4>
<p>用均匀细杆中的小振幅纵行波建立模型。杆的杨氏模量为 $Y$，体密度为 $\rho$，$u^2=Y/\rho$；此处 $y$ 表示纵向位移。小段原长 $\mathrm dx$，两端位移差约为 $(\partial y/\partial x)\mathrm dx$，故应变就是 $\partial y/\partial x$。</p>
$$\begin{aligned}w_k&=\frac{\mathrm dE_k}{\mathrm dV}=\frac12\rho\left(\frac{\partial y}{\partial t}\right)^2,\\ w_p&=\frac{\mathrm dE_p}{\mathrm dV}=\frac12Y\left(\frac{\partial y}{\partial x}\right)^2.
\end{aligned}$$
<p>代入单列平面简谐行波 $y=A\cos\psi$，利用 $Yk^2=\rho\omega^2$：</p>
$$\begin{aligned}w_k=w_p&=\frac12\rho\omega^2A^2\sin^2\psi,\\ w&=\rho\omega^2A^2\sin^2\psi,\\ \overline w&=\frac12\rho\omega^2A^2.\end{aligned}$$
<p><strong>单列行波的小介质元动能与势能同相变化。</strong>它在平衡位置附近速度和形变均大，两种能量同时大；位移达到极值时两者同时为零。介质元不断与邻近部分交换能量，所以自身总机械能通常不恒定。这与第9章孤立弹簧振子的动势能交替转换不同。</p>
<h4>2．波强是每平方米每秒通过的平均能量</h4>
<p>时间 $\mathrm dt$ 内，传播通过垂直面积 $S_\perp$ 的一段介质长 $u\mathrm dt$，其能量为 $wS_\perp u\mathrm dt$。先除以面积和时间，再取周期平均：</p>
$$\begin{aligned}J(t)&=uw(t),\\ I=\langle J\rangle&=u\overline w=\frac12\rho u\omega^2A^2,\\ \overline P&=IS_\perp.\end{aligned}$$
<p>$w$ 单位为 $\mathrm{J/m^3}$，$I$ 为 $\mathrm{W/m^2}$，$\overline P$ 为 $\mathrm W$。若面积与波线不垂直，需用投影面积 $S_\perp=S\cos\theta$；$\theta$ 是传播方向与面法线的夹角。对于平面声波，$\rho u$ 称为特性声阻抗。</p>
<p>弦是“一维”模型，应把体密度换成线密度并讨论功率，不把两者单位混用：</p>
$$\overline P_{\rm string}=\frac12\mu_\ell u\omega^2A^2.$$
<h4>3．几何扩散由功率守恒决定</h4>
<p>在无吸收、无额外能量输入的传播区域，包围同一波源的完整波面所通过的平均功率相等。再用同介质、同频下 $I\propto A^2$，立即得到：</p>
<div class="table-wrap"><table><thead><tr><th>波面模型</th><th>功率守恒</th><th>强度与振幅随距离</th></tr></thead><tbody>
<tr><td>理想平面波</td><td>波束横截面不变</td><td>$I$、$A$ 不随传播距离改变</td></tr>
<tr><td>各向同性点源的球面波</td><td>$4\pi r^2I=P$</td><td>$I\propto r^{-2}$，$A\propto r^{-1}$</td></tr>
<tr><td>理想长线源的柱面波</td><td>$2\pi r\ell I=P_\ell$</td><td>$I\propto r^{-1}$，$A\propto r^{-1/2}$</td></tr>
</tbody></table></div>
<p>这些是远离波源、忽略吸收的理想结论；柱面模型还要避开线源端部。球面波既有相位传播，又有振幅衰减，可写成：</p>
$$y(r,t)=A_0\frac{r_0}{r}\cos[\omega t-k(r-r_0)+\varphi_0].$$
<p>课件的分贝图表可用声强级量化：$L_I=10\log_{10}(I/I_0)\,\mathrm{dB}$，常用空气中参考声强 $I_0=10^{-12}\,\mathrm{W/m^2}$。强度增为10倍，声强级增加10 dB；振幅增为2倍而其他条件不变，声强级增加约6 dB。</p>`,
['先确认单列行波、驻波还是叠加波，选用适用的能量表达。','求介质元能量用 w，求面上的平均能流用 I，求总功率还需乘垂直面积。','比较不同距离时先写完整波面上的功率守恒，再由 I∝A² 得振幅。'],R`不能对驻波直接使用 wₖ=wₚ；不能仅凭“波源振幅相同”就断言不同观察点的分振幅相等。`),

t('10-interference','干涉：先算到达相位，再合成振幅与强度',5,'10-4 第 9–17 页',R`
<h4>1．叠加原理给出位移，相干条件给出稳定图样</h4>
<p>线性小振幅波相遇时，各自传播规律保持，介质的合位移等于各分位移相加。要形成位置稳定的干涉强弱分布，还要求频率相同、相位差恒定，并具有同方向的振动分量。</p>
<p>两源初相分别为 $\varphi_{10},\varphi_{20}$，到 P 的距离为 $r_1,r_2$。先分别写出传播延迟：</p>
$$\begin{aligned}y_1(P,t)&=A_1(P)\cos(\omega t+\varphi_{10}-kr_1),\\ y_2(P,t)&=A_2(P)\cos(\omega t+\varphi_{20}-kr_2),\\ \Delta\varphi_P&=(\varphi_{20}-\varphi_{10})-k(r_2-r_1).\end{aligned}$$
<p>最后一式是本节核心：<strong>到达相位差 = 初相差 − 传播引起的相位落后之差</strong>。这里统一用“2减1”；前后同时改成“1减2”也可以，但不能混用。</p>
<h4>2．把第9章同频振动的相量合成搬到 P 点</h4>
<p>令 $\theta_j=\varphi_{j0}-kr_j$。将 $A_j\cos(\omega t+\theta_j)$ 展开，合并余弦项和正弦项：</p>
$$\begin{aligned}C&=A_1\cos\theta_1+A_2\cos\theta_2,\\ D&=A_1\sin\theta_1+A_2\sin\theta_2,\\ y_P&=C\cos\omega t-D\sin\omega t\\ &=A_P\cos(\omega t+\varphi_P).\end{aligned}$$
$$\begin{aligned}A_P&=\sqrt{C^2+D^2}\\ &=\sqrt{A_1^2+A_2^2+2A_1A_2\cos\Delta\varphi_P},\\ \cos\varphi_P&=C/A_P,\qquad \sin\varphi_P=D/A_P.\end{aligned}$$
<p>需要合初相时用正弦、余弦共同定象限；只用 $\tan\varphi_P=D/C$ 会丢失象限。$A_P=0$ 时合初相无定义。</p>
<h4>3．加强、减弱是相位条件，程差条件有前提</h4>
$$\begin{aligned}\Delta\varphi_P=2m\pi&\Rightarrow A_{\max}=A_1+A_2,\\ \Delta\varphi_P=(2m+1)\pi&\Rightarrow A_{\min}=|A_1-A_2|.\end{aligned}$$
<p>只有两源同相时，才能直接说 $r_2-r_1=m\lambda$ 加强，$r_2-r_1=(m+1/2)\lambda$ 减弱。反相源的这两种位置恰好互换；“相消到零”还要求 P 点的两个分振幅相等。</p>
<h4>4．由振幅平方得到强度公式</h4>
<p>对同种、同频并具有相同振动方向的波，在可用同一比例系数 $I=CA^2$ 描述所测平均强度的情形（如同偏振光的标准干涉模型），把振幅式乘以 $C$：</p>
$$\begin{aligned}I_P&=I_1+I_2+2\sqrt{I_1I_2}\cos\Delta\varphi_P,\\ I_1=I_2=I_0\quad&\Rightarrow I_P=4I_0\cos^2(\Delta\varphi_P/2).\end{aligned}$$
<p>等强相干波最强处为 $4I_0$、最弱处为零，说明能量在空间中重新分配；不是凭空多出能量。若相位随机变化，使平均干涉项为零，则 $\overline I=I_1+I_2$。任意夹角下机械波的矢量能流还需按方向分析，不能把上式当作任意面的总净通量。</p>`,
['写出两源初相及到观察点的路程，统一差值顺序。','先算 Δφ，再化到一个周期内；不要直接背程差结论。','要振幅用相量合成，要初相再求 C、D 的象限，要强度检查分振幅与测量模型。'],R`等程不一定加强；同相波源不一定处处加强；波源等振幅不一定代表到 P 点等振幅。`),

t('10-huygens','波面如何前进：惠更斯、衍射与折射',3,'10-4 第 1–6、21–26 页',R`
<h4>1．从子波构造下一时刻的波面</h4>
<p>惠更斯原理把某一波面上的每一点看作发出子波的新波源。经过 $\Delta t$，各子波在均匀介质中前进 $u\Delta t$，它们向前的包络面就是新的波面。这一几何图景可说明传播方向变化；要精确计算衍射强度，还需要子波的相位叠加。</p>
<p>波绕过障碍物边缘、进入几何阴影区，称为衍射。孔缝或障碍物的特征尺寸与波长接近、甚至更小时，绕射通常更明显。衍射并非“满足某个尺寸才突然存在”，尺寸较大时只是更集中在几何传播方向。</p>
<h4>2．同一传播时间给出反射、折射定律</h4>
<p>平面波斜入射界面，一侧波面先到界面后，另一侧仍在原介质传播。用相同的 $\Delta t$ 比较两侧传播距离 $u_1\Delta t$ 与 $u_2\Delta t$，两个直角三角形具有公共几何边，得到：</p>
$$\begin{aligned}i'&=i,\\ \frac{\sin i}{\sin r}&=\frac{u_1}{u_2}.\end{aligned}$$
<p>$i,i',r$ 均相对法线测量。入射到波速较小的一侧时，$r<i$，折射线向法线偏折。界面静止且介质线性时频率不变，因而：</p>
$$\nu_1=\nu_2,\qquad \frac{\lambda_2}{\lambda_1}=\frac{u_2}{u_1}.$$
<h4>3．光的折射率只是在重写波速</h4>
<p>以真空光速 $c$ 定义 $n=c/u$，代入上式便是光的折射定律。由折射角不可能大于 $90^\circ$，可以进一步得到全反射条件：</p>
$$\begin{aligned}n_1\sin i&=n_2\sin r,\\ n_1>n_2:\quad \sin i_c&=n_2/n_1,\\ i>i_c&\Rightarrow\text{全反射}.\end{aligned}$$
<p>所以全反射要同时满足“从较大折射率到较小折射率”与“入射角超过临界角”。临界角时折射线沿界面；若方向反过来，不会出现这类全反射。</p>`,
['先画界面法线，把角度标在法线与波线之间。','比较介质波速或折射率，判断折射偏折方向。','再用正弦定律计算；问全反射时同时检查方向和临界角。'],R`静止界面改变波速与波长，通常不改变频率；反射的传播方向改变不等于振动位移一定反号。`),

t('10-standing','驻波的结构：空间决定振幅，时间决定共同节奏',5,'10-5 第 2、4–14 页',R`
<h4>1．为什么两列反向波会“站住”？</h4>
<p>设两列同频、同方向振动、等振幅的波反向传播，但保留一般初相：</p>
$$\begin{aligned}y_1&=A\cos(\omega t-kx+\varphi_1),\\ y_2&=A\cos(\omega t+kx+\varphi_2).
\end{aligned}$$
<p>用 $\cos\alpha+\cos\beta=2\cos[(\alpha-\beta)/2]\cos[(\alpha+\beta)/2]$，把空间和时间分开：</p>
$$\boxed{y=2A\cos\!\left[kx+\frac{\varphi_2-\varphi_1}{2}\right]\cos\!\left[\omega t+\frac{\varphi_1+\varphi_2}{2}\right]}$$
<p>行波的振动状态沿空间传递；驻波的各点按同一个时间因子振动，但空间因子规定各点的振幅与相位。等初相只是特殊情况，不能把它的节点坐标背给所有题目。</p>
<h4>2．节点和腹点都从空间因子求</h4>
<p>令 $\delta=(\varphi_2-\varphi_1)/2$，局部振幅必须非负：</p>
$$\begin{aligned}A_s(x)&=2A|\cos(kx+\delta)|,\\ \text{波节}:\quad kx+\delta&=(m+\tfrac12)\pi,\\ \text{波腹}:\quad kx+\delta&=m\pi.\end{aligned}$$
<p>波节恒不动，波腹振幅为 $2A$。相邻波节间距和相邻波腹间距均为 $\lambda/2$；相邻波节到波腹的距离为 $\lambda/4$。这些间距不依赖原点和初相，而具体坐标依赖。</p>
<h4>3．相位差为何只有 0 或 π？</h4>
<p>若某点空间因子为正，它跟随上式时间余弦；若空间因子为负，把负号吸收到相位中，就是增加 $\pi$。因此同一对相邻波节之间所有非波节质点同相，跨过一个波节的相邻区间反相，跨过两个又同相。波节振幅为零，不能给它定义振动相位。</p>
<p>一幅全弦都在平衡位置的瞬时图并不表示弦上没有运动；此时许多点正以最大速度通过平衡位置。驻波图必须结合时间因子解释。</p>`,
['先确认两列波同频、等振幅、反向，才能使用纯驻波结论。','用和差化积写成“空间因子 × 时间因子”。','空间因子为零求波节，绝对值最大求波腹，符号决定相位。'],R`不等振幅的反向波通常不能形成处处有固定零振幅节点的纯驻波，且一般仍有非零平均净能流。`,'standing'),

t('10-boundary','驻波的边界与能量：反射相位 → 简正模态',5,'10-5 第 10–14、16–25 页',R`
<h4>1．反射相位必须从边界求，而不是凭记忆加 π</h4>
<p>设边界位于 $x=L$，入射波沿 $+x$、反射波沿 $-x$，理想全反射时振幅相同：</p>
$$\begin{aligned}y_i&=A\cos(\omega t-kx+\varphi_i),\\ y_r&=A\cos(\omega t+kx+\varphi_r).
\end{aligned}$$
<p><strong>固定端：</strong>$y_i(L,t)+y_r(L,t)=0$ 对所有时刻成立，故边界处两波相位差为 $\pi$；反射波的原点初相还需计入往返路程：</p>
$$\varphi_r=\varphi_i-2kL+\pi\pmod{2\pi}.$$
<p><strong>理想自由端：</strong>横向合力为零，小振幅弦的边界条件为 $\partial_x(y_i+y_r)|_L=0$，由此得到：</p>
$$\varphi_r=\varphi_i-2kL\pmod{2\pi}.$$
<p>所以固定端是位移波节，位移反射反相，常称“半波损失”；自由端是位移波腹，位移反射不反相。只有当边界就在原点时，才可直接把两个<strong>原点初相</strong>之差写成 $\pi$ 或 0。普通两介质界面可能仅部分反射，不能一律套固定端结论。</p>
<p>声波要先辨别所画的是介质位移还是压强：位移波节对应声压波腹，位移波腹对应声压波节。理想封闭管端是位移波节；理想开口端近似为声压波节，实际还可能有端部修正。</p>
<h4>2．两个边界筛选出离散的允许频率</h4>
<p>两端固定的弦必须在 $x=0,L$ 同时为波节。空间因子可取 $\sin kx$，再要求 $\sin kL=0$，于是 $kL=n\pi$：</p>
$$\begin{aligned}\text{两端固定：}\quad \lambda_n&=\frac{2L}{n},&\nu_n&=\frac{nu}{2L},\\ \text{一端固定一端自由：}\quad\lambda_n&=\frac{4L}{2n-1},&\nu_n&=\frac{(2n-1)u}{4L},\\ &&n&=1,2,\ldots
\end{aligned}$$
<p>第一类容纳整数个半波长，基频为 $u/(2L)$，有全部整数倍谐频；第二类容纳奇数个四分之一波长，基频为 $u/(4L)$，只有奇数倍谐频。理想两端开口的声管两端均为位移波腹，非零模态频率同样为 $nu/(2L)$；一端封闭、一端开口的声管对应第二类。这些特定空间形状及其频率称为简正模态。外界持续驱动接近某个允许频率时，该模态容易形成明显驻波；真实幅度仍受阻尼限制。</p>
<h4>3．驻波“没有平均净能流”不等于每处没有能量</h4>
<p>用杆波的示例 $y=2A\cos kx\cos\omega t$，分别代入 $w_k=\rho y_t^2/2$ 与 $w_p=\rho u^2y_x^2/2$：</p>
$$\begin{aligned}w_k&=2\rho A^2\omega^2\cos^2kx\sin^2\omega t,\\ w_p&=2\rho A^2\omega^2\sin^2kx\cos^2\omega t.
\end{aligned}$$
<p>波腹处速度可以最大，但局部应变恒为零；波节处质点不动，却可能有最大应变和势能。驻波在不同时刻将能量分配到不同位置，因此任意小介质元一般也不单独守恒。两列行波平均能流大小相等、方向相反，所以周期平均的净能流为零；瞬时局部能流仍可不为零。</p>`,
['在实际边界坐标处写位移为零或斜率为零，求反射相位。','合成为驻波，再施加另一端边界，筛选 λ 与 ν。','能量题分别对时间和空间求导；不要沿用单列行波的 wₖ=wₚ。'],R`位移波节只说明此处位移与速度恒为零，不说明该处弹性势能恒为零。`),

t('10-doppler','多普勒：接收波面的速率与波面间距',4,'10-6 第 2–11、15–22 页',R`
<h4>1．观察者动：波长没变，遇到波面的速度变了</h4>
<p>以介质静止系为参考，声速为 $u$，源频率为 $\nu_S$。源静止时相邻波面间距 $\lambda=u/\nu_S$。观察者以 $v_O$ 向波源运动，每秒扫过距离 $u+v_O$，所以：</p>
$$\nu_O=\frac{u+v_O}{\lambda}=\nu_S\frac{u+v_O}{u}.$$
<h4>2．波源动：相邻波面发出的位置变了</h4>
<p>波源以 $v_S$ 向观察者运动。在一个发射周期 $T_S$ 中，前一个波面前进 $uT_S$，波源也前进 $v_ST_S$，所以源前方波长缩短为：</p>
$$\lambda_{\rm front}=(u-v_S)T_S=\frac{u-v_S}{\nu_S}.$$
<p>再让观察者移动，把“相遇速度”除以“实际波面间距”，得到统一式：</p>
$$\boxed{\nu_O=\nu_S\frac{u+v_O}{u-v_S}}$$
<p>此式采用一维、亚声速约定：$v_O$ 向源运动取正，$v_S$ 向观察者运动取正；远离取负。所有速度均相对介质。分子和分母的物理作用不同，所以不能只用源与观察者的相对速度代替两者。</p>
<h4>3．斜向运动先投影，但还要用正确的发射几何</h4>
<p>若 $\hat{\boldsymbol n}$ 是从源的发射位置指向观察者接收位置的传播方向，速度矢量形式为：</p>
$$\nu_O=\nu_S\frac{u-\boldsymbol v_O\cdot\hat{\boldsymbol n}}{u-\boldsymbol v_S\cdot\hat{\boldsymbol n}}.$$
<p>沿传播方向运动的观察者在追波，频率下降；沿传播方向运动的源在压缩波面，频率上升。这也能检查正负号。需要发射位置的运动题须结合 $t_{\rm rec}=t_{\rm emit}+R/u$，不能把收到信号的时刻直接当成发声时刻。</p>
<h4>4．回波为什么要算两次？</h4>
<p>静止发射接收器面对以 $v$ 迎面靠近的反射物。物体先作为运动观察者收到波，再作为运动波源反射同一节奏的波：</p>
$$\begin{aligned}\nu_1&=\nu_0\frac{u+v}{u},\\ \nu_{\rm echo}&=\nu_1\frac{u}{u-v}=\nu_0\frac{u+v}{u-v},\\ v&=u\frac{\nu_{\rm echo}-\nu_0}{\nu_{\rm echo}+\nu_0}.\end{aligned}$$
<p>如果回波与原波叠加形成拍，拍频为 $|\nu_{\rm echo}-\nu_0|$。上式的 $v$ 带符号，负值表示远离。</p>
<h4>5．超声速是另一种几何情形</h4>
<p>当源速 $v_S>u$ 时，先前发出的球面波形成锥形包络。在时间 $\Delta t$ 中，球面半径为 $u\Delta t$，源前进 $v_S\Delta t$，马赫锥半角满足：</p>
$$\sin\mu_M=\frac{u}{v_S}=\frac1{\mathrm{Ma}}.$$
<p>不能把亚声速前方公式中的分母直接算成负数并解释为负频率；此时应按波面和激波模型分析。声波多普勒式也不能直接用于真空光波。</p>`,
['明确介质参考系、实际波的传播方向与各速度方向。','源动先求波长，观察者动再求每秒接收波面数，以靠近升频作检查。','回波分成接收与再发射两步；斜向题注意传播时延。'],R`源与观察者即使具有相同相对速度，因各自相对介质的速度不同，听到的声频也不一定相同。`),

t('10-em','电磁波：由场的关系走到能量通量',3,'10-7 第 1–10 页',R`
<h4>1．把机械位移换成随时空变化的电场与磁场</h4>
<p>电磁波不需要机械介质。对均匀、各向同性、线性、无耗散介质中的单列平面波，电场 $\boldsymbol E$、磁场强度 $\boldsymbol H$ 均垂直传播方向，且彼此垂直、同相。沿 $+x$ 传播时可取：</p>
$$\begin{aligned}\boldsymbol E&=E_0\cos\psi\,\hat{\boldsymbol y},\\ \boldsymbol H&=H_0\cos\psi\,\hat{\boldsymbol z},\\ \psi&=\omega t-kx+\varphi,\qquad u=\frac1{\sqrt{\varepsilon\mu}}.
\end{aligned}$$
<p>场的关系来自麦克斯韦方程的平面波解。写成振幅比，可以同时分清 $H$ 与 $B$：</p>
$$\begin{aligned}Z&=\sqrt{\mu/\varepsilon}, & E_0/H_0&=Z,\\ \boldsymbol B&=\mu\boldsymbol H, & E_0/B_0&=u.
\end{aligned}$$
<p>$Z$ 是介质波阻抗，单位为欧姆；$E$ 单位 $\mathrm{V/m}$，$H$ 为 $\mathrm{A/m}$，$B$ 为 $\mathrm T$。真空中 $\varepsilon=\varepsilon_0$、$\mu=\mu_0$，于是 $u=c$、$Z_0\approx377\,\Omega$。$E/H=Z$ 和 $E/B=u$ 是不同的关系。</p>
<h4>2．电场能与磁场能为何同相、相等？</h4>
<p>在上述非色散介质模型中，单位体积的两部分能量是：</p>
$$\begin{aligned}w_E&=\frac12\varepsilon E^2,\\ w_B&=\frac12\mu H^2=\frac{B^2}{2\mu}.
\end{aligned}$$
<p>由 $E/H=\sqrt{\mu/\varepsilon}$ 得 $\varepsilon E^2=\mu H^2$，因此平面行波有 $w_E=w_B$，且：</p>
$$w=w_E+w_B=\varepsilon E^2=\mu H^2.$$
<p>二者随 $\cos^2\psi$ 同时变化。第9章理想 LC 回路中电场能与磁场能交替转化；这里讨论传播中的单列平面电磁波，能量通过空间流动，条件不同。</p>
<h4>3．坡印廷矢量给出流向与瞬时强度</h4>
$$\begin{aligned}\boldsymbol S&=\boldsymbol E\times\boldsymbol H=\frac1\mu\boldsymbol E\times\boldsymbol B,\\ S&=EH=uw,\\ I=\langle S\rangle&=\frac12E_0H_0\\ &=\frac{E_0^2}{2Z}=\frac{ZH_0^2}{2}=\frac12\varepsilon uE_0^2.
\end{aligned}$$
<p>电场沿 $+y$、磁场沿 $+z$ 时，叉乘沿 $+x$。经过半周期两场同时反号，叉乘仍沿 $+x$，所以能流方向不往返改变。若题目给有效值 $E_{\rm rms}=E_0/\sqrt2$，则 $I=E_{\rm rms}^2/Z$，不能再额外乘 $1/2$。</p>
<h4>4．课件拓展：偶极子远场 → 强度角分布 → 总辐射功率</h4>
<p>电荷来回运动形成振荡电偶极子。设其偶极矩 $p=p_0\cos\omega t$，尺寸远小于波长，所在介质均匀无耗散。在远场 $r\gg\lambda$，$\theta$ 为观察方向与偶极轴的夹角，课件给出的辐射场振幅为：</p>
$$\begin{aligned}E_0(r,\theta)&=\frac{\mu p_0\omega^2\sin\theta}{4\pi r},\\ H_0(r,\theta)&=\frac{p_0\omega^2\sin\theta}{4\pi ur}.
\end{aligned}$$
<p>两场共享延迟相位 $\omega(t-r/u)$（整体相位取决于场方向约定）。振幅随 $1/r$ 衰减，沿偶极轴不辐射、垂直偶极轴最强。将它们代入 $I=E_0H_0/2$，可见：</p>
$$I(r,\theta)=\frac{\mu p_0^2\omega^4}{32\pi^2ur^2}\sin^2\theta.$$
<p>最后把这个<strong>不均匀</strong>强度在整个球面上积分，才得到总功率；不能任取一个方向直接乘 $4\pi r^2$：</p>
$$\overline P=\frac{\mu p_0^2\omega^4}{12\pi u}\quad\xrightarrow{\text{真空}}\quad\frac{p_0^2\omega^4}{12\pi\varepsilon_0c^3}.$$
<p>在同一模型中固定 $p_0$，辐射功率正比于 $\omega^4$。频谱沿频率升高依次为无线电、微波、红外、可见光、紫外、X射线、γ射线；波长随之缩短。课件以约 $400$–$760\,\mathrm{nm}$ 标示可见光，各分段边界是约定范围，不能把类别当作新的传播规律。</p>`,
['辨认真空或介质，写 u、Z，并分清题给的是 E、H 还是 B。','用叉乘检查传播方向，再由场振幅关系求另一个场。','先求平均强度 I，再用投影面积求平均功率；确认峰值或有效值。'],R`电磁波的“同相”指 E 与 H（或 B）的局部振荡同相，不能把 H 与 B 混写，也不能套用 LC 回路的能量反相交换。`),

t('10-sound','目录补充：声压、声强级、超声与次声',2,'教材目录 10-8；所给 PPT 未覆盖，本模块为基础补充，未逐页核对教材正文',R`
<p><strong>教材目录补充，所给PPT未覆盖。</strong>以下把前面的纵波、能流与多普勒关系用于声学；采用均匀静止介质中的小振幅线性声波模型。气体声速采用理想气体、近似绝热压缩条件。</p>
<h4>1．位移梯度造成压缩，压缩产生声压</h4>
<p>用 $\xi(x,t)$ 表示介质质点沿 $x$ 的纵向位移，$p'$ 表示相对于平衡压强的微小增量。小段两端位移差造成相对体积变化 $\partial\xi/\partial x$；压缩时这个量为负，而声压为正。因此，体积模量 $K$（也常记为 $B$）给出：</p>
$$p'=-K\frac{\partial\xi}{\partial x}.$$
<p>对沿 $+x$ 的单列平面行波，$v_\xi=\partial\xi/\partial t=-u\partial\xi/\partial x$；再代入 $K=\rho u^2$：</p>
$$\boxed{p'=\rho u\,v_\xi}.$$
<p>所以声压与<strong>介质质点速度</strong>同相，声压并不与质点位移同相。若 $\xi=A\cos(\omega t-kx)$，则 $v_\xi=-\omega A\sin(\omega t-kx)$，声压峰值为 $p_0=\rho u\omega A$。向 $-x$ 传播且仍以 $+x$ 定义速度正向时，上式变成 $p'=-\rho u v_\xi$；两者叠加成驻波后，不能把总场简单套进单向行波关系。</p>
<h4>2．声压乘质点速度，就是瞬时能流密度</h4>
<p>压力在单位面积上每秒做功为 $p'v_\xi$。对单向平面声波取周期平均，并使用声阻抗 $Z_a=\rho u$：</p>
$$\begin{aligned}I&=\langle p'v_\xi\rangle\\ &=\frac{p_{\rm rms}^2}{\rho u}=\rho u\,v_{\rm rms}^2\\ &=\frac{p_0^2}{2\rho u}=\frac12\rho u\omega^2A^2.
\end{aligned}$$
<p>这与前面的位移振幅形式完全一致。$p_{\rm rms}=p_0/\sqrt2$ 为简谐声压的有效值；使用有效值时不再额外乘 $1/2$。近场或明显驻波场中，声压平方未必能直接代表平均净声强，需回到 $\langle p'v_\xi\rangle$。</p>
<h4>3．分贝是强度比的对数，不能直接相加</h4>
$$L_I=10\log_{10}\frac{I}{I_{\rm ref}}\,\mathrm{dB},\qquad I_{\rm ref}=10^{-12}\,\mathrm{W/m^2}.$$
<p>多个互不相干声源的强度可相加，声强级须先还原成强度再相加：</p>
$$L_{\rm total}=10\log_{10}\!\left(\sum_j10^{L_j/10}\right)\,\mathrm{dB}.$$
<p>这里 $L_j$ 取以dB表示的数值。两个等强互不相干声源合成后增加 $10\log_{10}2\approx3.01\,\mathrm{dB}$，不是声强级翻倍。若两源相干，还要考虑到达相位差，不能省掉干涉项。</p>
<p>对恒功率、各向同性点源的无吸收远场，$I\propto r^{-2}$，因此同一声源在两距离处满足：</p>
$$L_I(r_2)-L_I(r_1)=-20\log_{10}\frac{r_2}{r_1}\,\mathrm{dB}.$$
<p>距离加倍，强度降为 $1/4$，声强级约降低6.02 dB。这个6 dB规律来自球面扩散，不能直接用于受墙面反射影响的任意房间。</p>
<h4>4．频率分类仍服从同一套波动规律</h4>
<p>人的可听频率通常约为 $20\,\mathrm{Hz}$ 到 $20\,\mathrm{kHz}$；低于约20 Hz称次声，高于约20 kHz称超声，实际听觉范围因人而异。它们的区别主要是频率范围：在同一无色散介质中，超声频率更高意味着波长更短，不意味着波速更快。</p>
<p>短波长使超声较易形成方向集中的声束；超声回波测速度仍要经过两次多普勒变频。声管中的共振仍由驻波边界决定，位移波节对应声压波腹；这些都直接接回前面的波长、干涉、驻波与多普勒模型。</p>`,
['先辨认题给声压是峰值还是有效值，并检查是否可视为单向远场声波。','多声源先处理相干性；互不相干时加线性强度，再取对数。','距离变化先用球面功率守恒，最后再转换为分贝差。'],R`80 dB 与80 dB的独立声源共同作用约为83 dB，不是160 dB；声压有效值也不是声压峰值。`)
],
questions:[...previous.questions,
q('10-9','选择 · 过界面时什么改变？',R`一列频率由波源保持不变的简谐波穿过静止界面，在第二种无色散介质中的波速是第一种的2倍。第二介质中的频率与波长分别怎样变化？`,['频率变为2倍，波长不变','频率不变，波长变为2倍','频率变为1/2，波长变为2倍','频率与波长都变为2倍'],1,R`<ol><li>界面同一点不能同时按两种频率振动，故透射波频率与入射波相同：$\nu_2=\nu_1$。</li><li>把不变的频率代入联系式：$$\frac{\lambda_2}{\lambda_1}=\frac{u_2/\nu_2}{u_1/\nu_1}=2.$$</li><li>因此选B。这里先确定物理约束“频率不变”，再使用 $u=\lambda\nu$；不能仅凭乘积关系猜哪个量改变。</li></ol>`),
q('10-10','计算 · 张力、波速、能流与允许频率',R`一根均匀细弦线密度为 $\mu_\ell=4.0\times10^{-3}\,\mathrm{kg/m}$，张力 $F_T=40\,\mathrm N$。先考虑弦上的单列简谐行波，其频率为 $50\,\mathrm{Hz}$、振幅为 $2.0\,\mathrm{mm}$，求波速、波长和平均传输功率。再将长 $L=1.0\,\mathrm m$ 的同种弦两端固定，求其前三个简正频率。`,null,null,R`<ol><li><strong>介质与张力决定传播速度：</strong>$$u=\sqrt{F_T/\mu_\ell}=\sqrt{40/0.004}=\boxed{100\,\mathrm{m/s}}.$$</li><li><strong>由源频率连接到空间波长：</strong>$$\lambda=u/\nu=\boxed{2.0\,\mathrm m},\qquad\omega=2\pi\nu=100\pi\,\mathrm{rad/s}.$$</li><li><strong>单列行波向前传输能量：</strong>把振幅换成 $A=2.0\times10^{-3}\,\mathrm m$，$$\begin{aligned}\overline P&=\tfrac12\mu_\ell u\omega^2A^2\\ &=\tfrac12(0.004)(100)(100\pi)^2(0.002)^2\\ &=0.008\pi^2\,\mathrm W\approx\boxed{0.0790\,\mathrm W}.\end{aligned}$$这里使用线密度，求得的是功率而非每平方米的波强。</li><li><strong>两端固定后由边界选频：</strong>$$\nu_n=\frac{nu}{2L}=50n\,\mathrm{Hz}.$$前三个频率为 $\boxed{50,100,150\,\mathrm{Hz}}$，分别对应弦长内1、2、3个半波长。</li></ol><p>检查：第一个问题的波长2 m恰好满足1 m弦的基模条件；但一旦形成等振幅纯驻波，左右行波的平均净能流为零，不能把0.0790 W直接称为驻波的净输送功率。</p>`),
q('10-11','计算 · 非零时刻的波形图反求完整波函数',R`一列简谐横波沿 $+x$ 以 $u=2.0\,\mathrm{m/s}$ 传播。在 $t_0=0.50\,\mathrm s$ 时，其波形可写成 $y(x,t_0)=0.030\sin(\pi x)\,\mathrm m$（$x$ 以 m 计）。求完整波函数，并求 $x=0,t=0$ 处的质点速度、加速度以及 $t=t_0$ 时该点的运动方向。`,null,null,R`<ol><li><strong>先从空间图读参数：</strong>$A=0.030\,\mathrm m$，$k=\pi\,\mathrm{rad/m}$，所以 $\lambda=2\,\mathrm m$。再由传播速度得 $\omega=uk=2\pi\,\mathrm{rad/s}$，$T=1\,\mathrm s$。</li><li><strong>保留快照时刻求相位：</strong>向右行波设为 $y=0.030\cos(2\pi t-\pi x+\varphi)$。将 $t=0.50$ 代入并与 $0.030\cos(\pi/2-\pi x)$ 比较：$$\pi+\varphi=\pi/2\pmod{2\pi},\qquad\varphi=-\pi/2.$$因此 $$\boxed{y=0.030\sin(2\pi t-\pi x)\,\mathrm m}.$$</li><li><strong>求导得到质点运动：</strong>$$\begin{aligned}v_y&=0.060\pi\cos(2\pi t-\pi x)\,\mathrm{m/s},\\ a_y&=-0.120\pi^2\sin(2\pi t-\pi x)\,\mathrm{m/s^2}.\end{aligned}$$在原点、初始时刻，$\boxed{v_y=+0.060\pi\approx+0.1885\,\mathrm{m/s}}$，$\boxed{a_y=0}$。</li><li><strong>用斜率作独立检查：</strong>在快照时刻 $x=0$ 的空间斜率为 $+0.030\pi$，向右行波满足 $v_y=-u\partial_xy$，故此刻 $v_y=-0.060\pi\,\mathrm{m/s}$，方向向下。它与 $t=0$ 的方向相反，正好相隔半周期。</li></ol>`),
q('10-12','计算 · 电磁场、平均强度与接收功率',R`真空中一列均匀平面电磁波沿 $+x$ 传播，电场沿 $y$ 方向，峰值 $E_0=30\,\mathrm{V/m}$。取 $c=3.00\times10^8\,\mathrm{m/s}$、$Z_0=377\,\Omega$。求 $H_0$、$B_0$、平均强度，并求垂直波线放置的 $20\,\mathrm{cm^2}$ 接收面所通过的平均功率。电场指向 $+y$ 的瞬间磁场指向哪里？`,null,null,R`<ol><li><strong>先分清两种磁场量：</strong>$$\begin{aligned}H_0&=E_0/Z_0=30/377\approx\boxed{7.96\times10^{-2}\,\mathrm{A/m}},\\ B_0&=E_0/c=\boxed{1.00\times10^{-7}\,\mathrm T}.\end{aligned}$$</li><li><strong>由峰值求周期平均：</strong>$$I=\frac{E_0^2}{2Z_0}=\frac{900}{754}\approx\boxed{1.19\,\mathrm{W/m^2}}.$$因给的是峰值而非有效值，必须保留 $1/2$。</li><li><strong>由波强乘面积得到功率：</strong>$20\,\mathrm{cm^2}=2.0\times10^{-3}\,\mathrm{m^2}$，$$\overline P=IS\approx\boxed{2.39\times10^{-3}\,\mathrm W}.$$这是穿过该面积的功率；若问实际吸收功率，还需题给吸收比例。</li><li><strong>用叉乘确定方向：</strong>要使 $\boldsymbol E\times\boldsymbol H$ 沿 $+x$，当 $\boldsymbol E$ 沿 $+y$ 时，$\boldsymbol H$ 与 $\boldsymbol B$ 都沿 $\boxed{+z}$。两场同时反号后能流仍沿 $+x$。</li></ol>`),
q('10-13','选择 · 行波与驻波中的能量',R`关于均匀无耗散介质中的简谐弹性波，下列说法正确的是？`,['单列平面行波的每个介质元总机械能都恒定','单列平面行波中，小介质元的动能与弹性势能同相变化','驻波的波节不动，所以该处弹性势能恒为零','纯驻波平均净能流为零，因此所有位置的瞬时能量都为零'],1,R`<ol><li>能量分别由速度和形变决定：$$w_k=\tfrac12\rho y_t^2,\qquad w_p=\tfrac12\rho u^2y_x^2.$$</li><li>对单列行波 $y=A\cos(\omega t-kx)$，两项都为 $\tfrac12\rho A^2\omega^2\sin^2(\omega t-kx)$，所以同相，B正确。</li><li>A错在把介质元当成孤立振子；它不断接收和输出能量。C错在把位移为零等同于应变为零，驻波波节可以有很大应变。D混淆了平均净能流与能量密度，两个等强反向能流平均抵消并不表示没有储存的能量。</li></ol>`),
q('10-14','计算 · 分贝合成、倍距衰减与声压',R`【教材目录补充题】两只位置相近、互不相干的声源，可近似视为同一点发出的无吸收球面声波。每只单独工作时，在 $r_0=5.0\,\mathrm m$ 处产生的声强级均为 $80\,\mathrm{dB}$。两只同时工作时，求 $r=10\,\mathrm m$ 处的总声强和声强级；再以该处局部平面行波近似求合声压有效值。取 $I_{\rm ref}=10^{-12}\,\mathrm{W/m^2}$、$\rho=1.20\,\mathrm{kg/m^3}$、$u=340\,\mathrm{m/s}$。`,null,null,R`<ol><li><strong>先把每只声源的分贝还原成强度：</strong>$$I_1(r_0)=I_{\rm ref}10^{80/10}=10^{-4}\,\mathrm{W/m^2}.$$</li><li><strong>距离加倍，单源强度降为四分之一：</strong>$$I_1(r)=10^{-4}\left(\frac5{10}\right)^2=2.50\times10^{-5}\,\mathrm{W/m^2}.$$</li><li><strong>互不相干，先加强度再取对数：</strong>$$\begin{aligned}I_{\rm total}&=2I_1(r)=\boxed{5.00\times10^{-5}\,\mathrm{W/m^2}},\\ L_{\rm total}&=10\log_{10}(5.00\times10^7)\\ &\approx\boxed{76.99\,\mathrm{dB}}.\end{aligned}$$也可检查为 $80-6.02+3.01=76.99\,\mathrm{dB}$，分别对应距离和声源数量的影响。</li><li><strong>由声阻抗换算声压有效值：</strong>$$\begin{aligned}p_{\rm rms}&=\sqrt{\rho u I_{\rm total}}\\ &=\sqrt{(1.20)(340)(5.00\times10^{-5})}\\ &\approx\boxed{0.143\,\mathrm{Pa}}.\end{aligned}$$题目已给局部同向远场近似，因此可用该关系；不能把两个声压有效值直接相加。</li></ol>`)
]
};

const recall=[
R`同一波进入另一介质时，为什么应先保留 ν，再算 λ？弦的 μℓ 与杆的 ρ 单位为什么不同？`,
R`已知 x₀≠0 处的振动，能否不展开相位就写出完整波函数，并代回验证？`,
R`只给一幅空间快照能否确定 u？怎样用斜率与传播方向求质点速度的符号？`,
R`从 y 的两个偏导如何分别写出动能、势能？球面波 A∝1/r 与 I∝1/r² 的联系是什么？`,
R`为什么同相源的半波长程差是减弱，而反相源同一程差却加强？`,
R`折射时频率不变如何导致波长改变？全反射需同时满足哪两个条件？`,
R`给任意两初相，能否先和差化积，再求节点，而不是背特殊坐标？`,
R`固定端位于 L 而不是0时，反射波初相为什么多出 −2kL？节点不动为何还能有势能？`,
R`为什么观察者速度在分子、波源速度在分母？回波要把反射物分别看作什么？`,
R`E/H 与 E/B 分别等于什么？为什么单列平面电磁波的电场能、磁场能同相？`,
R`声压为何跟质点速度同相而非跟位移同相？两只等强独立声源与距离加倍，分别让声强级改变多少？`
];
chapter.topics.forEach((item,index)=>{item.recall=recall[index];});
export default chapter;
