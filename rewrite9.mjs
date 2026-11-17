import { R, t, q, chapters } from './content.mjs';

const chapter = {
  id: 9,
  title: '振动',
  en: 'OSCILLATIONS',
  stars: 5,
  subtitle: '回复规律决定频率，初始状态决定振幅和初相。',
  intro: '本章不是六组互不相干的公式。从平衡位置附近的回复规律得到运动方程，运动方程给出频率，再由初始条件确定一次具体运动；求导得到速度、加速度，积分回复力得到势能。合成、阻尼、受迫振动和 LC 回路，都在这条主线上继续发展。星级是结合课件内容给出的复习建议，不代表老师公布的分值。',
  map: [
    { title: '先判断是否简谐', formula: R`\ddot x+\omega^2x=0`, why: '从平衡位置列动力学方程，找出与位移成正比的回复项。', href: '9-model' },
    { title: '由模型确定频率', formula: R`\omega^2=K_{\rm eff}/m`, why: '频率由系统参数决定；摆动时换成回复力矩和转动惯量。', href: '9-oscillators' },
    { title: '由初态确定具体运动', formula: R`x=A\cos(\omega t+\varphi)`, why: '位移给余弦，速度给正弦，两者一起确定初相象限。', href: '9-phase' },
    { title: '运动与能量互相校验', formula: R`v^2=\omega^2(A^2-x^2)`, why: '由相位消元或机械能守恒得到同一关系。', href: '9-energy' },
    { title: '区分三种合成', formula: R`x=\sum_j x_j`, why: '同向同频求合振幅，垂直同频求轨迹，近频同向研究拍。', href: '9-collinear' },
    { title: '加入损耗和驱动力', formula: R`\ddot x+2\beta\dot x+\omega_0^2x=f\cos\Omega t`, why: '自由响应会衰减，长期响应由驱动力决定频率。', href: '9-forced' },
    { title: '迁移到电磁振荡', formula: R`\ddot q+q/(LC)=0`, why: '相同微分方程意味着相同的相位与能量方法。', href: '9-lc' }
  ],
  coverage: [
    { source: '9-1 · 简谐运动、振幅、周期、相位（20 页）', topics: '模型判据；x、v、a；初态定振幅和初相；周期与相位', notes: '第 9、10 页部分嵌入对象在导出时遮挡，动力学式由牛顿定律重建，并与第 11–20 页交叉核对。' },
    { source: '9-2 · 旋转矢量（19 页）', topics: '投影模型；相位差与时间；象限；圆弧小振动', notes: '时间问题必须同时保留位置和运动方向。' },
    { source: '9-3 · 单摆和复摆（11 页）', topics: '小角近似；力矩方程；支点转动惯量；周期', notes: '单摆和复摆分别推导，避免把质心距离误当摆长。' },
    { source: '9-4 · 简谐运动能量（11 页）', topics: '动势能交换；能量周期与平均值；能量法判简谐', notes: '将运动学、动力学、能量三条路线连接。' },
    { source: '9-5 · 简谐运动的合成（28 页）', topics: '两振动及多振动；椭圆与转向；李萨如图；拍', notes: '补入原资料缺失的 N 个等相差振动合成。' },
    { source: '9-6 · 阻尼、受迫、共振（10 页）', topics: '三类阻尼；衰减与 Q；稳态幅相；两种共振频率', notes: '第 6 页幅值分母漏平方，按动力学推导及第 7 页校正；指数能量衰减明确使用弱阻尼平均近似。' },
    { source: '9-7 · 电磁振荡（16 页）', topics: 'LC 方程；电荷电流相位；能量；机械类比', notes: '第 9–16 页重复前 8 页主体内容；全部核对。' }
  ],
  topics: [
    {
      ...t('9-model', '为什么会简谐：从回复力到运动方程', 5, '9-1 第 9–14 页；9-3 第 5–9 页；9-4 第 7–8 页', R`
<h4>模型：回复作用把物体拉回去，惯性让物体越过平衡位置</h4>
<p>把<strong>稳定平衡位置</strong>选作 $x=0$。若沿运动方向的合力恰好是 $F=-Kx$，其中 $K>0$ 且为常量，则力的大小随偏离程度增加，方向永远指向平衡位置。仅仅“往复运动”不足以判定简谐；核心是回复规律是否线性。</p>
<h4>从牛顿第二定律读出角频率</h4>
$$\begin{aligned}
F&=m\ddot x=-Kx,\\
\ddot x+\frac Km x&=0,\\
\omega^2&=\frac Km.
\end{aligned}$$
<p>试代余弦函数：它对时间求两次导数，恰好变成自身的 $-\omega^2$ 倍。因此这个方程的一般实解可写成：</p>
$$\begin{aligned}
x(t)&=A\cos(\omega t+\varphi),\qquad A\geqslant0,\\
T&=\frac{2\pi}{\omega},\qquad \nu=\frac1T=\frac{\omega}{2\pi}.
\end{aligned}$$
<p>$\omega$ 是相位每秒增加多少弧度，单位为 rad/s；$\nu$ 是每秒完成多少次振动，单位为 Hz。系统的质量、回复强度决定 $\omega$；怎样释放物体决定 $A,\varphi$。理想线性振子中，改变振幅不改变周期。</p>
<h4>更一般的判断：先找平衡点，再做小量展开</h4>
<p>若原坐标为 $X$，平衡点为 $X_e$，先令 $x=X-X_e$。在小范围内，若合力 $F(X_e+x)\approx F'(X_e)x$ 且 $F'(X_e)<0$，就可令 $K_{\rm eff}=-F'(X_e)>0$，近似为简谐。等价地，稳定平衡点附近的势能是开口向上的抛物线：</p>
$$\begin{aligned}
U(X_e+x)&\approx U(X_e)+\frac12 U''(X_e)x^2,\\
F&=-\frac{\mathrm dU}{\mathrm dx}\approx-U''(X_e)x,\\
\omega^2&=\frac{U''(X_e)}m.
\end{aligned}$$
<p>后面这个势能曲率表述是对课件能量法的归纳。它解释了为什么不同装置在小振幅下都可能简谐：稳定平衡附近，最先起作用的回复项通常与位移成正比。若回复力含明显的 $x^2,x^3$ 项，则只能在这些项可忽略的范围内使用简谐公式。</p>
<p><strong>怎样用：</strong>题目给受力时，不要先猜 $x=A\cos\cdots$；先把方程化成 $\ddot x+cx=0$，确认 $c>0$，再取 $\omega=\sqrt c$。给势能时可先求 $-\mathrm dU/\mathrm dx$，也可用后面的能量法。</p>`,
      ['画出平衡位置，明确坐标正方向。', '列沿运动方向的合力或合力矩，必要时作小振幅近似。', '整理成“二阶导数 + 正常数 × 位移 = 0”，读取角频率。', '再用初始条件求振幅、初相，最后写运动方程。'],
      R`回复力是合力，不一定只有弹力。竖直弹簧的重力已参与确定平衡位置；从平衡位置取坐标后才得到 $F=-Kx$。`),
      recall: '自检：出现周期性就一定简谐吗？不一定，必须能写成线性回复方程（或其小振幅近似）。'
    },
    {
      ...t('9-kinematics', '一条位移方程，推出速度、加速度和相位关系', 5, '9-1 第 11、19 页；9-2 第 5–7 页', R`
<h4>把相位当成描述运动状态的“时钟”</h4>
<p>记 $\theta=\omega t+\varphi$。对位移求导一次得到速度，再求导得到加速度，三者并不是三套独立公式：</p>
$$\begin{aligned}
x&=A\cos\theta,\\
v=\dot x&=-A\omega\sin\theta
          =A\omega\cos(\theta+\pi/2),\\
a=\ddot x&=-A\omega^2\cos\theta
          =A\omega^2\cos(\theta+\pi).
\end{aligned}$$
<p>用同一种余弦形式比较相位：速度比位移超前 $\pi/2$，加速度比位移超前 $\pi$，所以加速度与位移始终反向。这里“超前”描述相位，不是说某个量在因果上先发生。</p>
<h4>关键位置：由导数和符号一起判断</h4>
<div class="table-wrap"><table><thead><tr><th>位置</th><th>速度</th><th>加速度与合力</th></tr></thead><tbody>
<tr><td>$x=+A$</td><td>$v=0$，随后向负方向</td><td>$a=-A\omega^2$，负向最大</td></tr>
<tr><td>$x=0$</td><td>$|v|=A\omega$，方向需另判</td><td>$a=0,F=0$</td></tr>
<tr><td>$x=-A$</td><td>$v=0$，随后向正方向</td><td>$a=+A\omega^2$，正向最大</td></tr>
</tbody></table></div>
$$v_{\max}=A\omega,\qquad |a|_{\max}=A\omega^2.$$
<p>速度的<strong>大小</strong>是速率，不能把 $v_{\max}$ 写成负数。转折点速度虽为零，加速度却最大；平衡点加速度虽为零，速度却最大。合力为零不等于物体静止。</p>
<h4>消去时间：把速度直接写成位移的函数</h4>
<p>将 $x/A=\cos\theta$ 与 $v/(A\omega)=-\sin\theta$ 平方相加：</p>
$$\begin{aligned}
\frac{x^2}{A^2}+\frac{v^2}{A^2\omega^2}&=1,\\
v^2&=\omega^2(A^2-x^2),\\
v&=\pm\omega\sqrt{A^2-x^2}.
\end{aligned}$$
<p>这是 $x$–$v$ 相平面上的椭圆：同一位置可以有两个相反的速度，说明<strong>位置本身不能唯一确定运动状态</strong>。这个关系也会从能量守恒推出，能用来交叉检查运算。</p>
<p><strong>怎样用：</strong>已知 $A$ 和最大速度，先求 $\omega=v_{\max}/A$；已知最大加速度，取 $\omega=\sqrt{|a|_{\max}/A}$。已知位置求速度大小时直接消元，求带正负的速度时必须补充运动方向。</p>`,
      ['把所有振动量统一成余弦表示再比较相位。', '求某时刻的量就代相位；求某位置的速率就消去时间。', '检查加速度与位移反号，速度符号由运动方向决定。'],
      R`$a=-\omega^2x$ 只把加速度和位移关联起来，不能由它直接判断速度方向。`),
      recall: '自检：在 x>0 时物体是否一定向负方向运动？不是，但加速度一定为负。'
    },
    {
      ...t('9-phase', '初相、旋转矢量与时间：把象限信息保留下来', 5, '9-1 第 12、17–20 页；9-2 第 1–17 页；9-3 第 10–11 页', R`
<h4>初始状态给出两条约束，合起来才能确定初相</h4>
<p>在 $t=0$ 代入位移与速度式：</p>
$$\begin{aligned}
x_0&=A\cos\varphi,\\
v_0&=-A\omega\sin\varphi.
\end{aligned}$$
<p>第一式决定余弦，第二式决定正弦。平方相加求振幅，再用两个符号判断象限：</p>
$$\begin{aligned}
A&=\sqrt{x_0^2+\left(\frac{v_0}{\omega}\right)^2},\\
\cos\varphi&=\frac{x_0}{A},\qquad
\sin\varphi=-\frac{v_0}{A\omega},\\
\tan\varphi&=-\frac{v_0}{\omega x_0}\quad(x_0\ne0).
\end{aligned}$$
<p>正切式只有在<strong>补上象限</strong>后才可用。计算器的 $\arctan$ 主值只覆盖半个圆；数学上可写为 $\varphi=\operatorname{atan2}(-v_0/\omega,x_0)$。$A=0$ 时物体静止，初相没有意义。</p>
<div class="table-wrap"><table><thead><tr><th>初态</th><th>相位所在区间（模 $2\pi$）</th></tr></thead><tbody>
<tr><td>$x_0>0,v_0<0$</td><td>第一象限</td></tr>
<tr><td>$x_0<0,v_0<0$</td><td>第二象限</td></tr>
<tr><td>$x_0<0,v_0>0$</td><td>第三象限</td></tr>
<tr><td>$x_0>0,v_0>0$</td><td>第四象限</td></tr>
</tbody></table></div>
<h4>旋转矢量：用圆周上的角度表示往复运动</h4>
<p>设长度为 $A$ 的矢量以角速度 $\omega$ 逆时针转动，与正位移轴夹角为 $\theta$，它在位移轴上的投影恰为 $A\cos\theta$。圆周运动是<strong>辅助模型</strong>，质点的实际轨迹仍是一条直线。切向速度的投影给 $v$，向心加速度的投影给 $a$。</p>
<h4>时间题：不是把路程按比例分成几份</h4>
<p>简谐振子在平衡点附近快、转折点附近慢。相位却匀速增加，所以时间题先换成相位题：</p>
$$\Delta t=\frac{\Delta\theta}{\omega}=\frac{\Delta\theta}{2\pi}\,T.$$
<ol><li>由起点的位移和速度方向，确定起始相位。</li><li>由终点位移找出两个候选相位，再用终点运动方向或“首次到达”筛选。</li><li>沿相位增加方向取最小符合题意的正角度；若跨过 $2\pi$，给末相位加一周。</li></ol>
<div class="table-wrap"><table><thead><tr><th>指定过程</th><th>相位增量</th><th>时间</th></tr></thead><tbody>
<tr><td>从 $0$ 向正方向到 $A/2$</td><td>$\pi/6$</td><td>$T/12$</td></tr>
<tr><td>从 $A/2$ 向正方向到 $A$</td><td>$\pi/3$</td><td>$T/6$</td></tr>
<tr><td>从 $A$ 到 $0$</td><td>$\pi/2$</td><td>$T/4$</td></tr>
<tr><td>从 $A$ 首次到 $-A$</td><td>$\pi$</td><td>$T/2$</td></tr>
</tbody></table></div>
<p>例如从 $x=A/2$ 向负方向运动，起相位是 $\pi/3$；第一次到 $x=-A/2$ 的末相位为 $2\pi/3$，所以用时 $T/6$。若只取 $\arccos$ 而不看方向，会把另半个周期的状态混进来。</p>
<h4>同频振动的相位差与时间原点</h4>
<p>两振动频率相同，$\Delta\varphi=\varphi_2-\varphi_1$ 才是常量；取主差 $0<\Delta\varphi<\pi$ 时，可说 2 比 1 相位超前，对应同一阶段提前 $\Delta\varphi/\omega$。若新时间 $t'=t-t_s$，则：</p>
$$x=A\cos\bigl[\omega t'+(\varphi+\omega t_s)\bigr].$$
<p>改变计时起点会改变初相，不会改变实际运动；同频两振动一起换时间原点，相位差不变。读 $x$–$t$ 图时，纵截距给 $x_0$，初始切线斜率的正负给 $v_0$。</p>`,
      ['先求角频率和振幅。', '用初始位移给余弦，用初始速度给正弦，锁定象限。', '时间题沿相位圆找首个符合方向的目标状态。', '回代 t=0 检查位移和速度，不只检查位移。'],
      R`同一个位置在一周期内通常经过两次。相位相差 $2\pi$ 表示同一状态；相差 $\pi$ 则位移、速度均反号。`, 'shm'),
      recall: '自检：x₀=0 且 v₀>0，余弦式初相是多少？可取 −π/2，而不是 +π/2。'
    },
    {
      ...t('9-oscillators', '常见模型：弹簧、单摆、复摆都从同一标准式出发', 5, '9-2 第 18–19 页；9-3 第 1–9 页', R`
<h4>弹簧振子：静态伸长负责定位，增量回复力负责振动</h4>
<p>水平无摩擦弹簧有 $m\ddot x=-Kx$。竖直弹簧若向下为正，先设平衡伸长为 $\Delta l_0$，由 $K\Delta l_0=mg$。从此位置再向下偏离 $x$：</p>
$$\begin{aligned}
m\ddot x&=mg-K(\Delta l_0+x)=-Kx,\\
\omega&=\sqrt{K/m},\qquad T=2\pi\sqrt{m/K}.
\end{aligned}$$
<p>因此在理想线性弹簧条件下，重力只移走了平衡位置。两个弹簧共同回复时先求等效劲度：并联或左右夹持且都保持作用时，回复力增量相加，$K_{\rm eff}=K_1+K_2$；无质量连接、串联时伸长相加，$1/K_{\rm eff}=1/K_1+1/K_2$。这两个是模型应用拓展，适用前提是弹簧服从胡克定律且连接条件确实符合上述情形。</p>
<h4>单摆：回复力矩线性化后，才是简谐</h4>
<p>质量集中在摆球，摆长 $l$，忽略绳质量和阻力。以竖直向下为 $\theta=0$，对支点列转动方程：</p>
$$\begin{aligned}
J_O\ddot\theta&=-mgl\sin\theta,\qquad J_O=ml^2,\\
\ddot\theta+\frac gl\theta&\approx0\quad(|\theta|\ll1),\\
\omega&=\sqrt{g/l},\qquad T=2\pi\sqrt{l/g}.
\end{aligned}$$
<p>小角近似 $\sin\theta\approx\theta$ 要用弧度。运动式既可写 $\theta=\theta_m\cos(\omega t+\varphi)$，也可用弧长 $s=l\theta$；弧长振幅为 $l\theta_m$。大幅摆动的周期会依赖振幅，不能直接套这个小振幅公式。光滑圆弧轨道底部的质点沿切向满足 $mR\ddot\theta=-mg\sin\theta$，小振幅周期同理为 $2\pi\sqrt{R/g}$。</p>
<h4>复摆：分布质量的惯性不能用一个质点替代</h4>
<p>刚体绕固定水平轴摆动，质心距轴 $h$，关于该轴的转动惯量为 $J_O$。重力力矩仍为 $-mgh\sin\theta$，但惯性项换成真实的 $J_O$：</p>
$$\begin{aligned}
J_O\ddot\theta&=-mgh\sin\theta\approx-mgh\theta,\\
\omega^2&=\frac{mgh}{J_O},\\
T&=2\pi\sqrt{\frac{J_O}{mgh}},\qquad
J_O=J_C+mh^2.
\end{aligned}$$
<p>与单摆比较可得等效摆长 $l_{\rm eq}=J_O/(mh)$，一般不等于 $h$。例如均匀杆长 $l$、绕端点摆动：$J_O=ml^2/3$，$h=l/2$，于是 $l_{\rm eq}=2l/3$。</p>
<h4>把三个模型放回同一个结构</h4>
$$\begin{aligned}
\text{平动：}\quad \omega^2&=\frac{\text{回复力系数}}{\text{质量}},\\
\text{转动：}\quad \omega^2&=\frac{\text{回复力矩系数}}{\text{转动惯量}}.
\end{aligned}$$
<p><strong>怎样用：</strong>看到陌生装置，先确定是平动还是转动，写出相应惯性项，再找相对平衡位置的回复项。最后检查 $\omega^2$ 的单位必须是 $\mathrm{s^{-2}}$；周期根号内必须是 $\mathrm{s^2}$。</p>`,
      ['画平衡态，选 x 或 θ 作为偏离平衡的坐标。', '弹簧用合力，摆用关于固定支点的合力矩。', '对 sinθ 作小角近似，整理成标准方程。', '转动惯量必须关于同一支点轴，再计算周期。'],
      R`复摆不能只用质心距 $h$ 套单摆公式。$J_C$ 和 $J_O$ 也不能混用；平行轴项 $mh^2$ 不能漏。`),
      recall: '自检：竖直弹簧增加重力后，为什么小振动频率不变？重力项与平衡弹力抵消，增量回复系数仍为 K。'
    },
    {
      ...t('9-energy', '能量是第二条解题路线：守恒、比例、周期与反推模型', 5, '9-4 第 1–11 页', R`
<h4>先由回复力得到势能，再把运动方程代进去</h4>
<p>以平衡位置的势能为零，由 $F=-\mathrm dU/\mathrm dx=-Kx$ 积分得 $E_p=U=Kx^2/2$。记 $\theta=\omega t+\varphi$，又因 $K=m\omega^2$：</p>
$$\begin{aligned}
E_p&=\frac12Kx^2=\frac12KA^2\cos^2\theta,\\
E_k&=\frac12mv^2=\frac12KA^2\sin^2\theta,\\
E=E_k+E_p&=\frac12KA^2=\frac12m\omega^2A^2.
\end{aligned}$$
<p>总能量只由振幅和系统参数决定，不随相位变化。振幅变成 2 倍，总能量变为 4 倍；经过平衡位置时能量全为动能，转折点时全为势能。竖直弹簧这里的 $E_p$ 是以平衡位置为基准的<strong>总有效势能</strong>，包含重力势能与弹簧势能的合并，不能只取原始弹簧伸长能而漏掉重力。</p>
<h4>只问某位置的速度或能量，通常无需先求初相</h4>
$$\begin{aligned}
\frac{E_p}{E}&=\frac{x^2}{A^2},\\
\frac{E_k}{E}&=1-\frac{x^2}{A^2},\\
\frac{E_k}{E_p}&=\frac{A^2-x^2}{x^2}\quad(x\ne0),\\
\frac12mv^2&=\frac12K(A^2-x^2).
\end{aligned}$$
<p>最后一式立即回到 $v=\pm\omega\sqrt{A^2-x^2}$，与运动学消元完全一致。若 $E_k=nE_p$，则 $E=(n+1)E_p$，所以 $|x|=A/\sqrt{n+1}$；能量只能确定 $|x|$ 和 $|v|$，不能确定它们的正负。</p>
<h4>为什么能量周期是位移周期的一半？</h4>
$$\begin{aligned}
E_p(t)&=\frac E2\bigl[1+\cos(2\omega t+2\varphi)\bigr],\\
E_k(t)&=\frac E2\bigl[1-\cos(2\omega t+2\varphi)\bigr].
\end{aligned}$$
<p>能量只看平方，$x$ 与 $-x$ 的势能相同；其变化角频率是 $2\omega$，故周期为 $T/2$。余弦在完整周期内平均为零，因此 $\langle E_k\rangle=\langle E_p\rangle=E/2$。这说的是<strong>时间平均</strong>，不表示每一时刻两种能量都相等。它们相等对应 $x=\pm A/\sqrt2$，一个位移周期内共出现四次。</p>
<h4>能量法判简谐：从守恒式反推运动方程</h4>
<p>某装置若能写成 $E=\frac12m_{\rm eff}\dot x^2+\frac12K_{\rm eff}x^2=\text{常量}$，其中两个系数都与 $x,t$ 无关，对时间求导：</p>
$$\begin{aligned}
\frac{\mathrm dE}{\mathrm dt}
&=\dot x\bigl(m_{\rm eff}\ddot x+K_{\rm eff}x\bigr)=0,\\
\ddot x+\frac{K_{\rm eff}}{m_{\rm eff}}x&=0,\\
\omega&=\sqrt{K_{\rm eff}/m_{\rm eff}}.
\end{aligned}$$
<p>运动过程中 $\dot x\ne0$ 的区间可约去速度，转折点的方程由连续性延续，不能说在转折点“方程失效”。对摆，把动能换为 $J_O\dot\theta^2/2$，小角势能换为 $mgh\theta^2/2$，同样推出复摆频率。</p>
<p><strong>怎样用：</strong>约束力复杂但不做功时，能量法常比逐项列力更快。先把所有运动部分的动能写全，再把势能在平衡点附近展开到二次项，读出两个系数；只求速率和能量比例则直接守恒。</p>`,
      ['说明是否忽略摩擦、阻尼和外力做功。', '选势能零点，写完整的动能与有效势能。', '求位置关系用守恒；判简谐则对守恒式求时间导数。', '若题目要时间，再把能量条件换成相位条件。'],
      R`能量周期 $T/2$ 不是运动周期。$E_k=E_p$ 对应 $|x|=A/\sqrt2$，不是 $A/2$；在 $|x|=A/2$ 时是 $E_k=3E_p$。`),
      recall: '自检：势能已回到原值，运动状态就一定重复了吗？不一定，位移可能反号、速度方向也可能不同。'
    },
    {
      ...t('9-collinear', '同向同频合成：从两项展开到 N 个相量', 5, '9-5 第 1–7、16–17、24–28 页', R`
<h4>先问条件：同一个方向、同一个角频率</h4>
<p>令 $x_1=A_1\cos(\omega t+\varphi_1)$、$x_2=A_2\cos(\omega t+\varphi_2)$。合位移逐时刻相加；把余弦展开后，时间部分可以提出：</p>
$$\begin{aligned}
x=x_1+x_2&=C\cos\omega t-S\sin\omega t,\\
C&=A_1\cos\varphi_1+A_2\cos\varphi_2,\\
S&=A_1\sin\varphi_1+A_2\sin\varphi_2.
\end{aligned}$$
<p>再与 $A\cos(\omega t+\varphi)$ 比较系数，得到 $A\cos\varphi=C$、$A\sin\varphi=S$。所以合振动仍为同频简谐：</p>
$$\begin{aligned}
A&=\sqrt{C^2+S^2},\qquad \varphi=\operatorname{atan2}(S,C),\\
A^2&=A_1^2+A_2^2+2A_1A_2\cos\Delta\varphi,\\
\Delta\varphi&=\varphi_2-\varphi_1.
\end{aligned}$$
<p>这正是两个旋转矢量首尾相接后的余弦定理。相位差决定相长或相消，公共时间因子决定它们一起旋转，所以合振幅不会随时间变化。</p>
<div class="table-wrap"><table><thead><tr><th>相位差</th><th>合振幅</th><th>相位怎么判</th></tr></thead><tbody>
<tr><td>$2k\pi$</td><td>$A_1+A_2$</td><td>与两分振动同相</td></tr>
<tr><td>$(2k+1)\pi$</td><td>$|A_1-A_2|$</td><td>与较大振幅的分振动同相</td></tr>
<tr><td>$\pm\pi/2$</td><td>$\sqrt{A_1^2+A_2^2}$</td><td>用 C、S 判象限</td></tr>
</tbody></table></div>
<p>总有 $|A_1-A_2|\le A\le A_1+A_2$。完全抵消时 $A=0$，此时初相无定义。若等振幅，则 $A=2A_0|\cos(\Delta\varphi/2)|$；绝对值不能省去，负号应转化为相位增加 $\pi$。</p>
<h4>N 个同频振动：算法完全不变</h4>
$$\begin{aligned}
C&=\sum_{j=1}^N A_j\cos\varphi_j,\qquad
S=\sum_{j=1}^N A_j\sin\varphi_j,\\
A&=\sqrt{C^2+S^2},\qquad \varphi=\operatorname{atan2}(S,C).
\end{aligned}$$
<p>若 $N$ 个振动的振幅都为 $A_0$，初相依次为 $\varphi_0,\varphi_0+\delta,\ldots,\varphi_0+(N-1)\delta$，相量组成等边折线。把复数等比数列求和（它只是正弦、余弦求和的简写）：</p>
$$\begin{aligned}
\sum_{j=0}^{N-1}e^{ij\delta}
&=\frac{1-e^{iN\delta}}{1-e^{i\delta}}\\
&=e^{i(N-1)\delta/2}
  \frac{\sin(N\delta/2)}{\sin(\delta/2)},\\
A&=A_0\left|\frac{\sin(N\delta/2)}{\sin(\delta/2)}\right|.
\end{aligned}$$
<p>最后一式用于 $\delta\ne2k\pi$。当正弦比为正，合初相为 $\varphi_0+(N-1)\delta/2$；为负则再加 $\pi$。不熟悉复数时直接用前面的 C、S 求和即可。</p>
<p>两个重要极端：$\delta=2k\pi$ 时全部同相，直接得 $A=NA_0$，不要把式子机械代成 $0/0$；$N\delta=2k\pi$ 且 $\delta\ne2j\pi$ 时，相量闭合，$A=0$。这套“等振幅、等相差”的逻辑还会在后面的多缝衍射中再次出现。</p>
<p><strong>怎样用：</strong>只求合振幅可用余弦定理；要求完整方程，优先求 C、S，因为相位象限会自动保留下来。多振动先查对称性，能配对抵消或闭合时无需长算。</p>`,
      ['确认角频率相同，再把各项写成统一余弦形式。', '分别累加余弦分量 C 和正弦分量 S。', '由平方和求振幅，由两分量符号求初相。', '检查幅值范围，并回代 t=0 的位移与速度。'],
      R`同方向只保证位移可以代数相加，不保证振幅可以直接相加。合初相的正切为 $S/C$，与用初态求初相时的负速度号不是同一条式子。`),
      recall: '自检：四个等振幅振动初相相隔 π/2，合振幅是多少？相量构成闭合正方形，合振幅为 0。'
    },
    {
      ...t('9-transverse', '垂直振动合成：消去时间得到轨迹，再判运动方向', 4, '9-5 第 8–15 页', R`
<h4>模型不同：两个分量是同一平面运动的 x、y 坐标</h4>
<p>同向合成求的是一个坐标的总位移；垂直合成研究平面轨迹。取 $\theta=\omega t+\varphi_x$、$\delta=\varphi_y-\varphi_x$：</p>
$$\begin{aligned}
x&=A_x\cos\theta,\\
y&=A_y\cos(\theta+\delta)\\
 &=A_y\bigl(\cos\theta\cos\delta-\sin\theta\sin\delta\bigr).
\end{aligned}$$
<p>用 $x/A_x$ 代替 $\cos\theta$，将另一项移到左边再平方，利用 $\sin^2\theta=1-\cos^2\theta$ 消去时间：</p>
$$\frac{x^2}{A_x^2}+\frac{y^2}{A_y^2}
-\frac{2xy}{A_xA_y}\cos\delta=\sin^2\delta.$$
<p>一般为椭圆（$A_x,A_y>0$）。轨迹方程描述经过哪些点，<strong>本身没有保留运动方向</strong>，因为平方消元丢掉了部分符号信息。</p>
<div class="table-wrap"><table><thead><tr><th>相位差（模 $2\pi$）</th><th>轨迹</th></tr></thead><tbody>
<tr><td>$\delta=0$</td><td>$y=(A_y/A_x)x$，正斜率线段</td></tr>
<tr><td>$\delta=\pi$</td><td>$y=-(A_y/A_x)x$，负斜率线段</td></tr>
<tr><td>$\delta=\pm\pi/2$</td><td>$x^2/A_x^2+y^2/A_y^2=1$，轴与坐标轴重合的椭圆</td></tr>
<tr><td>$\delta=\pm\pi/2$ 且 $A_x=A_y$</td><td>圆</td></tr>
</tbody></table></div>
<h4>转向必须回到参数方程判断</h4>
<p>约定横轴向右、纵轴向上、$\omega>0$。取最右点 $\theta=0$，有 $x=A_x$、$v_x=0$、$v_y=-A_y\omega\sin\delta$。若 $0<\delta<\pi$，此处向下，轨迹按顺时针经过；若 $-\pi<\delta<0$，则逆时针。也可直接检查：</p>
$$xv_y-yv_x=-A_xA_y\omega\sin\delta.$$
<p>这个量为负对应顺时针，为正对应逆时针。$\delta=0,\pi$ 时退化为直线往复，无环绕方向。不要把这里的平面真实轨迹，和“辅助相量一律逆时针旋转”的画法混为一谈。</p>
<h4>频率不相同：李萨如图</h4>
<p>若 $\omega_x\ne\omega_y$，不能套上面的同频椭圆式。频率比为有理数 $\omega_x/\omega_y=m/n$（最简整数比），两分量在共同周期后同时重复，轨迹闭合；共同周期 $T_c=mT_x=nT_y$。在这段时间内，x 方向完成 m 次振动，y 方向完成 n 次。理想频率比为无理数时不存在有限共同周期，轨迹不严格闭合。</p>
<p><strong>怎样用：</strong>先检查频率；同频时先由相位差认形状，再选易算点判断方向。读李萨如图推频率比时，优先数同一闭合周期中两坐标各自的振动次数，不要随意把“环数”与频率直接对应。</p>`,
      ['把 x、y 写成相同时间原点下的形式，算 δ=φᵧ−φₓ。', '同频时消去时间，先识别直线、椭圆、圆。', '选最右点等特征位置求速度，判断方向。', '异频时另找共同周期，不能套同频公式。'],
      R`相位差的正负不影响上述轨迹方程中的 $\cos\delta$、$\sin^2\delta$，却会改变转向。仅给轨迹形状通常不能唯一确定相位差。`),
      recall: '自检：x=A cosωt，y=A cos(ωt+π/2)，从最右点向哪里运动？向下，所以顺时针。'
    },
    {
      ...t('9-beats', '拍：快振动被慢包络调制，拍频从“绝对值重复”读出', 4, '9-5 第 18–23、27–28 页', R`
<h4>条件：同方向、频率很接近，等振幅时最清楚</h4>
<p>取 $x_1=A_0\cos(\omega_1t+\varphi_1)$、$x_2=A_0\cos(\omega_2t+\varphi_2)$。用和差化积，不需要另造一个振动定律：</p>
$$\begin{aligned}
x&=2A_0\cos\!\left(\frac{\Delta\omega\,t+\Delta\varphi}{2}\right)
\cos\!\left(\bar\omega t+\bar\varphi\right),\\
\Delta\omega&=\omega_2-\omega_1,\qquad
\bar\omega=\frac{\omega_1+\omega_2}{2},\\
\Delta\varphi&=\varphi_2-\varphi_1,\qquad
\bar\varphi=\frac{\varphi_1+\varphi_2}{2}.
\end{aligned}$$
<p>$|\Delta\omega|\ll\bar\omega$ 时，后一个余弦振动很快，前一个因子缓慢变化。合运动不是振幅恒定的简谐运动，而是快振动的强弱周期变化。</p>
<h4>包络振幅必须非负，所以拍频不是频差的一半</h4>
$$A_{\rm env}(t)=2A_0\left|\cos\!\left(\frac{\Delta\omega\,t+\Delta\varphi}{2}\right)\right|.$$
<p>慢余弦的相位增加 $\pi$，虽然符号翻转，绝对值已重复。因此相邻“最强”之间满足 $|\Delta\omega|T_b/2=\pi$：</p>
$$\begin{aligned}
T_b&=\frac{2\pi}{|\Delta\omega|}=\frac1{|\nu_2-\nu_1|},\\
\nu_b&=|\nu_2-\nu_1|.
\end{aligned}$$
<p>例如 100 Hz 与 104 Hz 的两个同向振动，每秒出现 4 次强弱循环；快振动频率约为 102 Hz。4 Hz 是拍频，102 Hz 是快振动频率，它们描述不同层次。</p>
<h4>两振幅不等：最弱时不完全消失</h4>
<p>频率接近时，相位差 $\Delta\omega t+\Delta\varphi$ 缓慢变化。沿用两相量夹角的余弦定理，瞬时包络为：</p>
$$\begin{aligned}
A_{\rm env}^2(t)&=A_1^2+A_2^2
+2A_1A_2\cos(\Delta\omega t+\Delta\varphi),\\
A_{\max}&=A_1+A_2,\qquad A_{\min}=|A_1-A_2|.
\end{aligned}$$
<p>所以只有等振幅时才会出现完全相消。拍频测量只给出两个频率之差的绝对值，不能单靠一次拍频测量判定未知频率在标准频率上方还是下方；需要再改变其中一个频率观察拍频增减。</p>
<p><strong>怎样用：</strong>先把角频率换成普通频率再求拍频，或者直接用 $|\Delta\omega|/(2\pi)$。若用强度观察，强度近似正比包络振幅的平方，相邻强度极大之间仍然是一个拍周期。</p>`,
      ['确认两个近频振动沿同一方向叠加。', '用和差化积区分快变化和慢变化。', '对慢因子取绝对值得到包络，按相邻强弱循环求拍频。', '由拍频反推未知频率时保留正负两种可能，再用附加条件排除。'],
      R`频率单位为 Hz，角频率单位为 rad/s；$\nu_b=|\omega_2-\omega_1|$ 少了 $2\pi$。同频的稳定相消不是拍。`),
      recall: '自检：两个频率相差 6 Hz，慢余弦本身为 3 Hz，为什么拍仍为 6 Hz？它每半周期绝对值就重复。'
    },
    {
      ...t('9-damping', '阻尼：振幅怎样衰减，三种响应怎样区分', 3, '9-6 第 1–4 页', R`
<h4>在理想振子上加入与速度反向的阻力</h4>
<p>取线性阻力 $F_d=-b\dot x$，$b>0$。回复力仍为 $-Kx$，所以：</p>
$$\begin{aligned}
m\ddot x+b\dot x+Kx&=0,\\
\ddot x+2\beta\dot x+\omega_0^2x&=0,\\
\beta&=\frac{b}{2m},\qquad \omega_0=\sqrt{K/m}.
\end{aligned}$$
<p>$\omega_0$ 是忽略阻尼时的固有角频率；$\beta$ 的单位为 $\mathrm{s^{-1}}$，描述衰减速率。将试探解 $x=e^{rt}$ 代入，特征根为 $r=-\beta\pm\sqrt{\beta^2-\omega_0^2}$，根号内的符号决定三种情况。</p>
<h4>三类阻尼：先比较 β 和 ω₀</h4>
<div class="table-wrap"><table><thead><tr><th>条件</th><th>位移形式</th><th>物理特征</th></tr></thead><tbody>
<tr><td>欠阻尼 $\beta<\omega_0$</td><td>$A_0e^{-\beta t}\cos(\omega_dt+\varphi)$</td><td>振幅衰减，仍有往复振动</td></tr>
<tr><td>临界阻尼 $\beta=\omega_0$</td><td>$(C_1+C_2t)e^{-\beta t}$</td><td>重复实根，无周期性振荡</td></tr>
<tr><td>过阻尼 $\beta>\omega_0$</td><td>$C_1e^{r_+t}+C_2e^{r_-t}$</td><td>两负实根，无周期性振荡</td></tr>
</tbody></table></div>
$$\omega_d=\sqrt{\omega_0^2-\beta^2},\qquad T_d=\frac{2\pi}{\omega_d}.$$
<p>欠阻尼的位移不严格周期重复，$T_d$ 指余弦因子的周期或相邻同向峰值的时间间隔。临界、过阻尼运动可能因初态而穿过平衡位置一次，不能把“无振荡”误解成“绝不越过平衡位置”。</p>
<h4>由峰值读衰减，由耗散功率联系能量</h4>
<p>相邻同向位移峰值满足 $A_{n+1}/A_n=e^{-\beta T_d}$，因此对数减量为：</p>
$$\Lambda=\ln\frac{A_n}{A_{n+1}}=\beta T_d.$$
<p>直接对机械能求导，不用猜测衰减式：</p>
$$\begin{aligned}
E&=\frac12m\dot x^2+\frac12Kx^2,\\
\frac{\mathrm dE}{\mathrm dt}
&=\dot x(m\ddot x+Kx)=-b\dot x^2\le0.
\end{aligned}$$
<p>这条耗散功率关系是精确的。欠阻尼的瞬时机械能一般并不严格等于“常量乘 $e^{-2\beta t}$”，因为速度也含振幅求导产生的项。<strong>弱阻尼</strong> $\beta\ll\omega_0$ 时，在一个周期内幅值变化很小，才常把周期平均能量近似写成：</p>
$$\begin{aligned}
A_{\rm env}(t)&=A_0e^{-\beta t},\qquad \tau_A=1/\beta,\\
\overline E(t)&\approx E_0e^{-2\beta t},\qquad \tau_E=1/(2\beta).
\end{aligned}$$
<h4>品质因数 Q：储能相对每周期损失的尺度</h4>
<p>弱阻尼时，若一周期损失为 $\Delta E_{\rm loss}$，则 $Q\approx2\pi E/\Delta E_{\rm loss}$。由 $\Delta E_{\rm loss}/E\approx2\beta T_d$ 得：</p>
$$Q\approx\frac{\omega_0}{2\beta}=\omega_0\tau_E\approx\frac{\pi}{\Lambda}.$$
<p>Q 越大，衰减越慢，共振响应越尖锐。这里能量弛豫时间 $\tau_E$ 是平均能量降到原来 $1/e$ 的时间；振幅降到 $1/e$ 的时间是它的 2 倍，不能混用。</p>
<p><strong>怎样用：</strong>题给相隔若干周期的峰值，先用对数求 $\beta$，再由 $\omega_0^2=\omega_d^2+\beta^2$ 求固有频率；只有确认弱阻尼后，才用 Q 和平均能量指数的近似。</p>`,
      ['由 b、m 求 β，由 K、m 求 ω₀，判断阻尼类型。', '欠阻尼再计算 ωd 和峰值间隔 Td。', '用峰值比的对数求衰减常数，注意跨了多少周期。', '涉及能量与 Q 时写明弱阻尼近似，并区分两种弛豫时间。'],
      R`阻尼振动的 $\omega_d$、无阻尼固有频率 $\omega_0$、驱动频率 $\Omega$ 是三个不同的量。指数包络不是质点实际位移曲线。`),
      recall: '自检：弱阻尼下振幅变为原来 1/2，平均能量约变成多少？约为 1/4。'
    },
    {
      ...t('9-forced', '受迫稳态与共振：幅值、相位和峰值频率要一起看', 4, '9-6 第 5–8 页；稳态能量吸收由同一方程推得', R`
<h4>方程有两部分解：逐渐消失的自由响应和长期保留的驱动响应</h4>
<p>外力为 $F_0\cos\Omega t$，沿用 $\beta=b/(2m)$、$\omega_0^2=K/m$，并记 $f=F_0/m$：</p>
$$\ddot x+2\beta\dot x+\omega_0^2x=f\cos\Omega t.$$
<p>通解是阻尼自由振动的暂态解加一个受迫特解。对于 $b>0$，暂态最终消失；稳态与外力同频，取 $x_s=A\cos(\Omega t-\delta)$。这里明确规定 $\delta$ 表示<strong>位移落后外力</strong>的相位。</p>
<h4>代入方程，比较正弦与余弦系数</h4>
<p>等价的相位分量关系为：</p>
$$\begin{aligned}
A(\omega_0^2-\Omega^2)&=f\cos\delta,\\
2\beta\Omega A&=f\sin\delta.
\end{aligned}$$
<p>平方相加得到幅值，相除再判断象限得到相位。这两条式子把回复、惯性、阻尼三种作用连接起来：</p>
$$\begin{aligned}
A(\Omega)&=\frac{f}{\sqrt{(\omega_0^2-\Omega^2)^2+4\beta^2\Omega^2}},\\
\delta&=\operatorname{atan2}(2\beta\Omega,\,\omega_0^2-\Omega^2),\\
\tan\delta&=\frac{2\beta\Omega}{\omega_0^2-\Omega^2}.
\end{aligned}$$
<p>对 $b>0,\Omega>0$，取 $0<\delta<\pi$。低频时 $\delta\to0$，位移近似跟随外力，$A\to F_0/K$；$\Omega=\omega_0$ 时 $\delta=\pi/2$；高频时 $\delta\to\pi$，位移近乎反相。只写一个 $\arctan$ 容易把高频区域错放到负角。</p>
<p>课件第 6 页幅值分母中的第一项有漏平方，以上按方程和第 7 页一致的写法整理。量纲也能发现问题：分母根号内两项都应具有 $\mathrm{s^{-4}}$ 的量纲。</p>
<h4>位移共振：最小化幅值分母，不能直接令 Ω=ω₀</h4>
<p>记分母的平方为 $D=(\omega_0^2-\Omega^2)^2+4\beta^2\Omega^2$。令 $\mathrm dD/\mathrm d\Omega=0$，非零极值点为：</p>
$$\begin{aligned}
\frac{\mathrm dD}{\mathrm d\Omega}
&=4\Omega(\Omega^2-\omega_0^2+2\beta^2),\\
\Omega_r&=\sqrt{\omega_0^2-2\beta^2},\\
A_r&=\frac{f}{2\beta\sqrt{\omega_0^2-\beta^2}}.
\end{aligned}$$
<p>非零频率的位移峰值要求 $\beta<\omega_0/\sqrt2$。阻尼较强时幅值随驱动频率增加而下降，没有这个非零共振峰；弱阻尼下才可近似说 $\Omega_r\approx\omega_0$。</p>
<h4>速度幅值和平均吸收功率的峰值：恰好在 ω₀</h4>
<p>速度幅值是 $V=\Omega A$，因此它的最大值位置与 A 的最大值位置不同。对固定 $F_0,b>0$：</p>
$$\begin{aligned}
\Omega_{V,\max}&=\omega_0,\qquad V_{\max}=\frac{F_0}{b},\\
\langle P\rangle&=\frac12F_0\Omega A\sin\delta
                 =\frac12b\Omega^2A^2,\\
\Omega_{P,\max}&=\omega_0,\qquad
\langle P\rangle_{\max}=\frac{F_0^2}{2b}.
\end{aligned}$$
<p>稳态下每周期输入能量等于阻尼耗散。在 $\Omega=\omega_0$ 时，位移落后外力 $\pi/2$，而速度又超前位移 $\pi/2$，所以速度与外力同相，最有利于持续输入能量。</p>
<p><strong>怎样用：</strong>问“振动频率”先判断是否稳态，稳态就取驱动频率；问“共振”必须看求的是位移、速度还是吸收功率。无阻尼且恰好共振时，振幅随时间增长，不存在上述有限幅稳态。</p>`,
      ['把外力写清，区分固有角频率、阻尼角频率、驱动角频率。', '稳态取驱动频率，按题目求 A 和落后相位 δ。', '问共振先说明观测量，再选对应峰值条件。', '用低频极限、相位象限和量纲检查结果。'],
      R`$\omega_d=\sqrt{\omega_0^2-\beta^2}$ 是阻尼自由振动频率；$\Omega_r=\sqrt{\omega_0^2-2\beta^2}$ 是位移共振驱动频率，根号里的系数不同。`),
      recall: '自检：驱动频率等于固有频率时，位移和外力同相吗？不同相，位移落后 π/2，速度才与外力同相。'
    },
    {
      ...t('9-lc', 'LC 振荡：同一个简谐方程，两种能量互换', 3, '9-7 第 1–8 页（第 9–16 页重复主体内容）', R`
<h4>模型与正方向：电容储电场能，电感储磁场能</h4>
<p>理想 LC 回路忽略电阻、辐射和外源。规定某极板电荷为 $q$，并选择电流参考方向，使 $i=\mathrm dq/\mathrm dt$。回路电压关系写成 $L\,\mathrm di/\mathrm dt+q/C=0$；若选了相反电流方向，中间符号会变，但物理结果不变。</p>
$$\begin{aligned}
L\frac{\mathrm di}{\mathrm dt}+\frac qC&=0,\qquad i=\dot q,\\
\ddot q+\frac1{LC}q&=0,\\
\omega_0&=\frac1{\sqrt{LC}},\qquad
T=2\pi\sqrt{LC},\qquad \nu=\frac1{2\pi\sqrt{LC}}.
\end{aligned}$$
<p>这就是简谐方程，所以机械振动中的全部初相方法都能迁移过来，无需重新背一套互不相关的规则。</p>
<h4>电荷、电压、电流：求导产生四分之一周期的相位差</h4>
$$\begin{aligned}
q&=Q_m\cos(\omega_0t+\varphi),\\
u_C&=\frac{q}{C}=\frac{Q_m}{C}\cos(\omega_0t+\varphi),\\
i&=\dot q=-\omega_0Q_m\sin(\omega_0t+\varphi),\\
I_m&=\omega_0Q_m.
\end{aligned}$$
<p>在上述电流正方向约定下，电流比电荷超前 $\pi/2$。电荷（或电压）最大时电流为零；电荷为零时电流的绝对值最大。一般初态 $q_0,i_0$ 给出：</p>
$$\begin{aligned}
Q_m&=\sqrt{q_0^2+\left(\frac{i_0}{\omega_0}\right)^2}
     =\sqrt{q_0^2+LCi_0^2},\\
\cos\varphi&=q_0/Q_m,\qquad
\sin\varphi=-i_0/(\omega_0Q_m).
\end{aligned}$$
<h4>电场能与磁场能对应势能与动能</h4>
$$\begin{aligned}
W_E&=\frac{q^2}{2C}=\frac{Q_m^2}{2C}\cos^2(\omega_0t+\varphi),\\
W_B&=\frac12Li^2=\frac{Q_m^2}{2C}\sin^2(\omega_0t+\varphi),\\
W&=W_E+W_B=\frac{Q_m^2}{2C}=\frac12LI_m^2.
\end{aligned}$$
<p>总能量守恒，电、磁能交换周期均为 $T/2$。若电容初始电压为 $U_0>0$ 且初电流为零，可取 $\varphi=0$，于是 $Q_m=CU_0$、$I_m=U_0\sqrt{C/L}$、$W=CU_0^2/2$。从这个初态起，第一次两种能量相等在 $\omega_0t=\pi/4$，即 $t=T/8$。</p>
<div class="table-wrap"><table><thead><tr><th>机械简谐振子</th><th>理想 LC 回路</th><th>为什么对应</th></tr></thead><tbody>
<tr><td>位移 x</td><td>电荷 q</td><td>决定回复项及势能型储能</td></tr>
<tr><td>速度 $v=\dot x$</td><td>电流 $i=\dot q$</td><td>都是前一变量的时间变化率</td></tr>
<tr><td>质量 m</td><td>电感 L</td><td>乘在二阶时间导数前</td></tr>
<tr><td>劲度 K</td><td>电容的倒数 $1/C$</td><td>乘在位移或电荷前</td></tr>
<tr><td>$Kx^2/2$</td><td>$q^2/(2C)$</td><td>势能型储能</td></tr>
<tr><td>$mv^2/2$</td><td>$Li^2/2$</td><td>动能型储能</td></tr>
</tbody></table></div>
<p><strong>怎样用：</strong>先由 L、C 求角频率；再用初始电荷、电流求 Q 和初相；问最大电流或能量时优先守恒，问“首次达到”时再回到相位。单位换算先做：$\mu\mathrm F=10^{-6}\,\mathrm F$，$\mathrm{pF}=10^{-12}\,\mathrm F$。</p>`,
      ['明确电荷极板和电流参考方向。', '由 LC 计算 ω₀，检查 LC 的单位为 s²。', '由初态求 Qm 与初相，或由总能量求最大电流。', '把能量比例化成相位条件，筛选首次时刻。'],
      R`与弹簧劲度对应的是 $1/C$，不是 C。电容变大使回复效应减弱，振荡频率降低，这也能帮助记忆。`),
      recall: '自检：电容两端电压为零时，回路能量是否为零？不是，此时能量全在电感磁场中，电流绝对值最大。'
    },
    {
      ...t('9-nonlinear', '教材目录补充：简谐近似的边界与非线性系统', 2, '教材目录 9-8《简述非线性系统》；所给 PPT 未覆盖', R`
<p><strong>范围说明：</strong>本节按教材目录补充基础概念，所给 PPT 未覆盖；未取得教材这一节的正文。下面用已学的势能和单摆作解释，作为理解性补充，具体考试要求以老师说明为准。</p>
<h4>从势能展开看：简谐是稳定平衡附近的线性近似</h4>
<p>沿用本章开头的思路，把稳定平衡点选为 $x=0$。若势能足够光滑且 $U'(0)=0$、$K=U''(0)>0$，泰勒展开为：</p>
$$\begin{aligned}
U(x)&=U(0)+\frac12Kx^2+\frac16U'''(0)x^3
       +\frac1{24}U''''(0)x^4+\cdots,\\
F(x)=-\frac{\mathrm dU}{\mathrm dx}
    &=-Kx-\frac12U'''(0)x^2-\frac16U''''(0)x^3-\cdots.
\end{aligned}$$
<p>位移很小时，高阶回复项可忽略，便回到 $m\ddot x+Kx=0$。振幅增大到高阶项不可忽略时，方程含 $x^2,x^3$ 等非线性项，运动一般不再是单一余弦，周期也可能依赖振幅。同一非线性系统的两个解通常不能直接相加成为新解，因此前面同频简谐合成的叠加方法不能无条件照搬。</p>
<h4>单摆实例：周期与振幅无关，只是最低阶结果</h4>
<p>单摆的精确回复项是 $\sin\theta$，把它多保留一项就能看到非线性从哪里来：</p>
$$\begin{aligned}
\ddot\theta+\omega_0^2\sin\theta&=0,\qquad \omega_0^2=g/l,\\
\sin\theta&=\theta-\frac{\theta^3}{6}+\cdots,\\
\ddot\theta+\omega_0^2\theta-\frac{\omega_0^2}{6}\theta^3+\cdots&=0.
\end{aligned}$$
<p>令摆角振幅为 $\theta_0$，由精确能量守恒得到的周期积分按振幅展开，首个修正为：</p>
$$T\approx T_0\left(1+\frac{\theta_0^2}{16}\right),\qquad
T_0=2\pi\sqrt{l/g}.$$
<p>这里 $\theta_0$ 必须用弧度，且该截断式仍要求振幅较小，只是比最简单的 $T=T_0$ 更精确；不能用于接近倒立位置的大摆角。它说明单摆振幅增大时周期变长。此式用于理解近似层次，<strong>不作为所给课件要求硬背的新公式</strong>。系数与条件可参看 <a href="https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter24.pdf" target="_blank" rel="noopener">MIT 单摆周期修正推导（24.C.59）</a>。</p>
<h4>非线性与混沌：确定的规律，也可能限制长期预测</h4>
<p>混沌是某些确定性系统出现的复杂、非周期演化；其重要特征是对初始条件敏感：非常接近的两个初态，经过演化可能产生很大差别。同一确定方程在完全相同的初态和参数下仍给出相同演化，困难在于实际初态只能测到有限精度；这与把运动直接归因于随机扰动不同。参见 <a href="https://elmer.unibas.ch/pendulum/chaos.htm" target="_blank" rel="noopener">巴塞尔大学：确定性混沌与初态敏感性</a>。</p>
<p><strong>非线性不必然产生混沌。</strong>例如无阻尼、无驱动的理想单摆，在摆动能量范围内仍可周期运动；加入驱动和阻尼后，某些参数区间才可能出现混沌。本节要掌握的联系是：小振幅使非线性回复项可忽略，从而得到本章最熟悉的简谐模型；离开这个近似范围，必须重新检查运动方程。</p>`,
      ['先定位稳定平衡点，检查回复规律是否能近似成一次项。', '判断振幅是否足够小；高阶项不可忽略时不直接套简谐周期和叠加原理。', '概念题区分“非线性”“非简谐”“混沌”，不要把它们当作同义词。'],
      R`不是所有大振幅运动都必然非线性，也不是所有非线性运动都混沌；关键看模型中的回复规律及参数。单摆周期修正式中的振幅必须用弧度。`),
      recall: '自检：大幅单摆不是简谐，就一定混沌吗？不是；无驱动、无阻尼的理想单摆仍可作非简谐的周期摆动。'
    }
  ],
  questions: [
    ...chapters[0].questions,
    q('9-9', '选择 · 垂直振动的轨迹与转向', R`在横轴向右、纵轴向上的坐标系中，$x=A\cos\omega t$、$y=A\cos(\omega t+\pi/2)$，其中 $A>0,\omega>0$。合运动为哪一种？`, ['正斜率直线上的往复运动', '半径为 A 的圆周，顺时针', '半径为 A 的圆周，逆时针', '长短轴不等的椭圆'], 1, R`<ol><li>把 y 写成 $-A\sin\omega t$，平方相加得 $x^2+y^2=A^2$，所以是圆。</li><li>$t=0$ 时位于最右点 $(A,0)$。</li><li>此时 $v_x=0$、$v_y=-A\omega<0$，从最右点向下，故为顺时针。</li></ol><p>答案为 B。若只消去时间，B 和 C 无法区分；必须用速度恢复方向信息。辅助旋转矢量逆时针转，不代表这个平面合运动也逆时针。</p>`),
    q('9-10', '选择 · 三个等相差振动的合成', R`三个同向振动为 $x_1=A_0\cos\omega t$、$x_2=A_0\cos(\omega t+2\pi/3)$、$x_3=A_0\cos(\omega t+4\pi/3)$。合振动的振幅是多少？`, [R`$3A_0$`, R`$\sqrt3A_0$`, R`$A_0$`, '0'], 3, R`<p>方法一：各分量相加。</p>$$\begin{aligned}C&=A_0(1-1/2-1/2)=0,\\S&=A_0(0+\sqrt3/2-\sqrt3/2)=0,\\A&=\sqrt{C^2+S^2}=0.\end{aligned}$$<p>方法二：三根等长、相隔 $120^\circ$ 的相量闭合为正三角形，合相量为零。也符合 N 项公式：$N=3,\delta=2\pi/3$，分子 $\sin\pi=0$，分母不为零。</p><p>答案为 D。此时没有非零合振动，不能再给它指定一个确定初相；完全抵消与拍中的暂时相消也不同。</p>`),
    q('9-11', '计算 · 用能量法建模，再由初态定方程', R`质量 $m=0.50\,\mathrm{kg}$ 的滑块在光滑水平面上，左右分别连接劲度 $K_1=20\,\mathrm{N/m}$、$K_2=30\,\mathrm{N/m}$ 的理想弹簧，另一端固定；两弹簧均能保持作用。以平衡位置为 $x=0$。初始 $x_0=0.030\,\mathrm m$、$v_0=+0.40\,\mathrm{m/s}$。用能量法证明是简谐运动，求振动方程、总能量，以及首次动能等于势能的时刻。`, null, null, R`<ol><li><strong>写相对平衡态的能量。</strong>偏移 x 时两弹簧的回复力增量相加，合有效势能为 $(K_1+K_2)x^2/2$；即使平衡态有预伸长，一次项也会因平衡条件抵消。$$E=\frac12m\dot x^2+\frac12(K_1+K_2)x^2=\text{常量}.$$</li><li><strong>对时间求导。</strong>$$\begin{aligned}\dot x\,[m\ddot x+(K_1+K_2)x]&=0,\\\ddot x+100x&=0,\\\omega&=10\ \mathrm{rad/s}.\end{aligned}$$转折点由连续性延续同一方程。</li><li><strong>初态定振幅和象限。</strong>$$\begin{aligned}A&=\sqrt{0.030^2+(0.40/10)^2}=0.050\ \mathrm m,\\\cos\varphi&=0.6,\qquad \sin\varphi=-0.8,\\\varphi&=-0.927295\ \mathrm{rad}.\end{aligned}$$因此 $$\boxed{x=0.050\cos(10t-0.927295)\ \mathrm m}.$$初相在第四象限，与初始正位移、正速度一致。</li><li><strong>总能量。</strong>$$\boxed{E=\frac12(50)(0.050)^2=0.0625\ \mathrm J}.$$也可由初态得到 $E_k=0.0400\,\mathrm J$、$E_p=0.0225\,\mathrm J$，相加相同。</li><li><strong>筛选首次能量相等。</strong>条件为 $|x|=A/\sqrt2$。初始 x 为正且继续增大，首先到达正的 $A/\sqrt2$，相位从 $-0.927295$ 增到 $-\pi/4$，所以 $$\boxed{t=\frac{0.927295-\pi/4}{10}\approx1.419\times10^{-2}\ \mathrm s}.$$不能选 $+\pi/4$：那是到正端点再回来的下一次。</li></ol>`),
    q('9-12', '计算 · 拍频的两解与实验排除', R`未知振动与 $256\,\mathrm{Hz}$ 的标准振动同向叠加，每秒出现 4 次拍。把标准振动的频率提高到 $258\,\mathrm{Hz}$ 后，每秒出现 2 次拍。求未知频率。若原来两振动的振幅均为 $A_0$ 且初相均为零，写出合运动，并求从初始最强到第一次最弱的时间。`, null, null, R`<ol><li><strong>先保留绝对值的两个分支。</strong>$$|\nu-256|=4\quad\Longrightarrow\quad \nu=252\ \text{或}\ 260\ \mathrm{Hz}.$$</li><li><strong>用第二次测量排除。</strong>若为 252 Hz，改变后拍频是 6 Hz；若为 260 Hz，改变后为 2 Hz。故 $$\boxed{\nu=260\ \mathrm{Hz}}.$$</li><li><strong>对原来的 256 Hz 与 260 Hz 作和差化积。</strong>由题设初相均为零，$$\begin{aligned}x&=A_0\cos(512\pi t)+A_0\cos(520\pi t)\\&=\boxed{2A_0\cos(4\pi t)\cos(516\pi t)}.\end{aligned}$$快振动频率是 258 Hz，包络为 $2A_0|\cos4\pi t|$，拍频是 4 Hz。</li><li><strong>最强到最弱是半个拍周期。</strong>首次包络为零满足 $4\pi t=\pi/2$，所以 $$\boxed{t=1/8\ \mathrm s=0.125\ \mathrm s}.$$相邻两个最强之间才是 $T_b=1/4\,\mathrm s$。</li></ol>`),
    q('9-13', '计算 · 从衰减测参数，再比较两种共振', R`某质量 $m=1.00\,\mathrm{kg}$ 的线性阻尼振子，相邻同向位移峰值相隔 $T_d=\pi/2\,\mathrm s$；每经过 10 个这样的周期，峰值变为原来的 $e^{-1}$。求 $\beta,\omega_0,b,K$ 及弱阻尼近似下的 Q。再施加幅值 $F_0=0.0200\,\mathrm N$ 的简谐外力：求驱动角频率为 $\omega_0$ 时的稳态位移幅值和落后相位，并求位移共振角频率。`, null, null, R`<ol><li><strong>由峰值间隔求阻尼频率。</strong>$$\omega_d=\frac{2\pi}{T_d}=4.00\ \mathrm{rad/s}.$$</li><li><strong>由指数包络求 β。</strong>$$\begin{aligned}\frac{A_{n+10}}{A_n}&=e^{-10\beta T_d}=e^{-1},\\\beta&=\frac1{10T_d}=\frac1{5\pi}\approx0.063662\ \mathrm{s^{-1}}.\end{aligned}$$注意时间跨度是 10 个周期。</li><li><strong>恢复无阻尼系统参数。</strong>$$\begin{aligned}\omega_0&=\sqrt{\omega_d^2+\beta^2}\approx4.00051\ \mathrm{rad/s},\\b&=2m\beta\approx0.127324\ \mathrm{kg/s},\\K&=m\omega_0^2\approx16.0041\ \mathrm{N/m}.
\end{aligned}$$ <p>$\beta/\omega_0\approx0.0159\ll1$，可以采用弱阻尼近似。</p>$$\boxed{Q\approx\omega_0/(2\beta)\approx31.42}.$$也可用单周期对数减量 $\Lambda=0.1$ 得 $Q\approx\pi/\Lambda$。</li><li><strong>在 Ω=ω₀ 时求幅相。</strong>此时幅值分母的刚度与惯性差项为零：$$\begin{aligned}A(\omega_0)&=\frac{F_0}{b\omega_0}\approx0.039265\ \mathrm m,\\\delta&=\pi/2.
\end{aligned}$$以外力为 $0.0200\cos(\omega_0t)\,\mathrm N$ 时，稳态位移可写为 $x_s\approx0.039265\cos(\omega_0t-\pi/2)\,\mathrm m$；稳态频率跟随外力，位移落后四分之一周期。</li><li><strong>位移峰值位置略低于 ω₀。</strong>$$\boxed{\Omega_r=\sqrt{\omega_0^2-2\beta^2}=\sqrt{\omega_d^2-\beta^2}\approx3.99949\ \mathrm{rad/s}}.$$速度幅值峰值在 $\Omega=\omega_0$，不是 $\Omega_r$。两者数值很近，是因为本题阻尼很弱。</li></ol>`)
  ]
};

export default chapter;
