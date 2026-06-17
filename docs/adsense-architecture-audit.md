# cusprose AdSense 架构审计与后续备忘

日期：2026-06-17

## 背景

cusprose 是一个面向英文用户的占星、塔罗与东方玄学内容站，当前技术栈为 Astro 静态站，部署目标为 Cloudflare Pages，主域名为 `https://cusprose.com`。

站点方向具备 AdSense 潜力，尤其是“英文语境下解释 Tarot、Western Astrology、I Ching、BaZi、Feng Shui”的组合有差异化。但当前站点仍有较多 mockup、coming soon 和单样例页面，尚不适合直接按盈利站标准提交 AdSense 或大规模投放流量。

## 当前基础

- 已有 Astro 静态站结构，适合 SEO 与内容规模化。
- 已配置 `@astrojs/sitemap`，`astro.config.mjs` 中固定 canonical production domain 为 `https://cusprose.com`。
- `robots.txt` 已允许搜索引擎抓取，并指向 sitemap。
- 已有基础法律与信任页面：About、Terms、Privacy。
- 星座页已有动态路由基础：12 星座 daily、weekly、monthly、yearly。
- 已有 `scripts/update_horoscopes.py`，可以校验并更新 horoscope JSON 数据。
- 站点定位清晰：现代、温和、面向英文 Gen Z 用户的 divination / astrology / Eastern metaphysics hub。

## 主要问题

### 1. 首页没有复用统一布局

`src/pages/index.astro` 自己写了完整 HTML、meta、结构化数据、导航和样式，而其他页面使用 `src/layouts/BaseLayout.astro`。

这会导致：

- SEO 元信息重复维护。
- AdSense 脚本未来需要重复接入。
- canonical、OG、Twitter card、structured data 容易不一致。
- 全局样式和字体策略难以统一。

后续应将首页迁回 `BaseLayout`。

### 2. 存在未完成入口与占位链接

当前导航和页面中存在以下未完成承诺：

- `Shop` 导航入口指向 `#`。
- `SIGN IN` 按钮不可用。
- compatibility 页面是 Leo × Libra 固定样例。
- birth chart 表单不真正计算，只提示即将上线。
- BaZi calculator 与部分 I Ching 按钮仍为 coming soon / `href="#"`。
- 部分商业 CTA，如 paid report、unlock、shop，尚未真正可用。

AdSense 审核前应移除或隐藏这些入口，或者改成真实可用页面。

### 3. 内容结构还没有完全内容站化

当前页面数量有限，且很多栏目还只是 hub 或 mockup。对于 AdSense 与 SEO，需要形成可持续索引的内容库，而不是少量漂亮页面。

建议优先扩展：

- 78 张塔罗牌独立解释页。
- 144 个星座配对页。
- 64 个易经卦象页。
- BaZi 十天干、十二地支、五行、十神、日主等专题页。
- Feng Shui 房间、方位、五行、bagua、常见问题专题页。

### 4. 星座内容有基础，但缺 SEO 深度

当前 daily / weekly / monthly / yearly 星座页已经可生成，但还需要：

- 每页显示明确更新时间。
- 增加作者或编辑署名。
- 增加 Article / BlogPosting schema。
- 增加 FAQ 区块。
- 增加星座基础知识模块。
- 增加相关星座、塔罗牌、兼容性、birth chart 的内链。
- 建立每日归档 URL，避免每天覆盖后丢失长期搜索价值。

### 5. 隐私政策不够适配 AdSense

当前 `src/pages/privacy.astro` 只写了普通 cookies 和 analytics。接入 AdSense 前，需要明确说明：

- Google AdSense / Google advertising cookies。
- 第三方广告服务商可能使用 cookies 或类似技术。
- 个性化广告与非个性化广告。
- 用户如何管理广告偏好。
- GDPR / CCPA 等地区性隐私权利，如目标市场需要。

可以在 Privacy 中新增独立广告章节，也可以增加 Cookie Policy 页面。

## 推荐目标架构

### 第一层：核心频道页

- `/horoscopes/`
- `/tarot/`
- `/compatibility/`
- `/birth-chart/`
- `/east/`
- `/guides/`

这些页面负责分发流量、建立主题权威、承接导航和内链。

### 第二层：可规模化内容库

- `/tarot/cards/the-star/`：塔罗牌库，目标 78 页。
- `/iching/hexagrams/11-tai/`：易经卦象库，目标 64 页。
- `/compatibility/leo/libra/`：星座配对库，目标 144 页。
- `/horoscopes/aries/daily/2026-06-17/`：每日星座历史归档。
- `/feng-shui/bedroom/`、`/feng-shui/desk-position/` 等专题页。
- `/bazi/day-master/jia-wood/`、`/bazi/five-elements/wood/` 等专题页。

这些页面负责长尾 SEO 与持续内容增长。

### 第三层：工具页

- Tarot draw。
- Birth chart calculator。
- BaZi calculator。
- I Ching coin toss / hexagram generator。
- Compatibility selector。

工具页负责用户停留、回访和自然分享。AdSense 更偏好用户真实可用、任务明确的页面，而不是只有承诺的 landing page。

## 优先级路线图

### Phase 1：AdSense 审核准备

目标：减少审核风险，统一基础设施。

- 将首页迁入 `BaseLayout`。
- 移除或隐藏 `Shop`、`Sign in`、paid report、coming soon calculator 等未上线入口。
- 修复所有 `href="#"` 的核心交互入口。
- 扩展 Privacy，加入 Google AdSense / ads cookies 说明。
- 强化 About，加入编辑方针、内容创作方式、免责声明和联系方式。
- 为 `BaseLayout` 增加更灵活的 SEO props：`type`、`publishedDate`、`modifiedDate`、`author`、`schema`、`noindex`。
- 使用更合适的 OG image，不再默认使用 favicon。

### Phase 2：内容库打底

目标：先拥有足够原创、可索引、可内链的内容量。

- 建立 `src/data/tarotCards.ts`，生成 78 张塔罗牌页面。
- 建立 `src/data/compatibility.ts`，先生成 12 个核心配对页，再扩到 144 页。
- 建立 `src/data/ichingHexagrams.ts`，先生成 8-16 个高质量卦象页，再扩到 64 页。
- 每个内容页加入 FAQ、相关文章、面包屑、作者/更新时间。
- 建立统一 Article schema 与 FAQPage schema 组件。

### Phase 3：工具与留存

目标：让站点不只是文章库，而是可反复使用的 divination 工具站。

- 将 tarot draw 打磨为稳定工具页。
- 实现 birth chart 基础计算，至少能输出 Sun / Moon / Rising 或明确说明可用范围。
- 实现 I Ching coin toss 并生成卦象结果页。
- 实现 compatibility selector，选择两个星座后进入对应配对页。
- 建立 newsletter 或收藏功能前，应先保证隐私政策和数据处理真实一致。

### Phase 4：广告位与收益优化

目标：在内容与体验稳定后再引入广告。

- 在文章正文中设置自然广告位，避免首屏过度拥挤。
- 工具结果页可放置结果后广告位，但不要影响核心交互。
- 移动端优先检查广告是否遮挡内容。
- 不在按钮、抽牌、选择器附近放误触广告。
- 使用 analytics 观察页面 RPM、停留时长、跳出率，再决定广告密度。

## AdSense 上线前检查清单

- 主导航所有链接真实可用。
- 没有核心功能指向 `#`。
- 没有不可用的付费承诺或登录承诺。
- 至少 30-50 个有实质内容的原创页面。
- Privacy 包含广告 cookies 与 Google 广告说明。
- About 包含清晰联系信息与站点定位。
- 每篇文章或内容页有独立标题、描述、更新时间、作者或编辑署名。
- sitemap 可访问且包含主要页面。
- robots 未误拦截重要路径。
- 移动端页面没有遮挡、溢出或固定 CTA 干扰阅读。
- 内容避免低质量批量 AI 痕迹，优先高质量英文原创解释。

## 后续执行建议

下一步建议从 Phase 1 开始：

1. 统一 `BaseLayout` 与首页。
2. 清理占位入口。
3. 更新 Privacy / About。
4. 建立 SEO schema props。
5. 然后再进入 Tarot / Compatibility / I Ching 的内容库生成。

优先顺序建议为：

1. Tarot card meanings：搜索需求稳定，适合快速建立内容库。
2. Zodiac compatibility：长尾词多，适合规模化。
3. I Ching hexagrams：差异化强，英文内容竞争相对更可打。
4. BaZi / Feng Shui：适合建立品牌权威，但需要更高内容质量和解释准确性。