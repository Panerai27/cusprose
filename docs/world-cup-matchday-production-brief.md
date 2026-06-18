# World Cup Matchday Content Production Brief

日期：2026-06-18

## 一句话总结

今天围绕世界杯比赛日热点，为 cusprose 的 `Cosmic Forecasts` 内容集群完成了第一版内容生产方案：用世界杯流量切入，但不做博彩预测，而是定位为赛事、运动员和公众时刻的 symbolic reading 与 post-match reflection。

## 今日实际产出

### 1. 新增执行文档

文件：`docs/world-cup-matchday-content-plan.md`

该文档定义了世界杯比赛日内容生产的完整执行方案，包括：

- 今日内容目标。
- 世界杯专题页结构。
- 运动员 astrology profile 选题。
- 单场 matchday tarot preview 模板。
- post-match reflection 复盘模板。
- 合规红线与人工审核问题。
- 最小内链闭环。

### 2. 明确内容定位

今日确定的栏目方向为：

```text
Cosmic Forecasts
```

核心表达为：

```text
World Cup public moments, read through symbolic systems for entertainment and reflection.
```

这个定位的重点是借世界杯热点获取关注，但避免把站点语义推向 betting、odds、best bets 或 guaranteed prediction。

### 3. 确定今日内容组合

今天采用“三层内容”组合：

1. 世界杯专题页：承接大词、解释栏目边界、收纳后续文章。
2. 运动员资料页：承接 evergreen SEO，优先写公开资料清晰的人物。
3. 单场 tarot preview：承接当天热点，但只做 symbolic reading，不承诺结果。

## 今日规划的内容资产

### P0 内容

今天建议优先推进 4 个核心资产：

1. `World Cup 2026 Cosmic Forecasts: Tarot Previews, Astrology Notes, and Match Reflections`
2. `Lionel Messi's Zodiac Sign and Career Astrology Notes`
3. `Cristiano Ronaldo's Zodiac Sign and Career Astrology Notes`
4. `{Team A} vs {Team B} Tarot Preview: A Symbolic Reading for the World Cup Match`

### P1 内容

有余力时再补充：

1. `Kylian Mbappe's Zodiac Sign and Public Career Symbolism`
2. `World Cup Matchday Tarot Spread: Momentum, Pressure, and Turning Point`
3. `How Tarot Match Previews Work: A Symbolic Guide for Sports Fans`

### P2 内容

后续作为内容库扩展：

1. `Neymar's Zodiac Sign and Public Career Symbolism`
2. `Erling Haaland's Zodiac Sign and Football Persona`
3. `World Cup Post-Match Tarot Reflections Archive`

## 页面与 URL 方案

### 世界杯专题页

```text
/forecasts/events/world-cup-2026/
```

用途：

- 作为世界杯期间所有 symbolic readings 的专题入口。
- 汇总 tarot previews、athlete astrology profiles 和 post-match reflections。
- 通过 disclaimer 明确非投注建议。

### 运动员资料页

```text
/athletes/lionel-messi/astrology/
/athletes/cristiano-ronaldo/astrology/
```

用途：

- 承接长期搜索需求。
- 为比赛 preview 提供稳定内链。
- 只基于公开资料写职业主题和星座象征，不写私人推断。

### 单场比赛 preview

```text
/forecasts/sports/football/world-cup-2026/{team-a}-vs-{team-b}-tarot-preview/
```

用途：

- 承接比赛日即时搜索和社交讨论。
- 使用 `Momentum / Pressure / Turning Point` 三张牌结构。
- 预留赛后更新区，后续转化为 reflection。

## 合规与品牌控制

今日方案中明确禁止使用以下语义：

- betting tips
- best bets
- odds
- parlay
- stake
- guaranteed prediction
- guaranteed winner
- sure win
- exact result
- lock of the day

固定体育页免责声明：

```text
This reading is for entertainment and reflection only. It is not betting advice, financial advice, or a guaranteed prediction of the result.
```

固定名人页免责声明：

```text
This profile uses publicly available information and symbolic astrology language. It does not claim to describe private facts, health, relationships, or personal intentions.
```

## 今日发现与修正

在计划文档检查时发现并修正了一个人物星座事实点：

- Lionel Messi 的太阳星座模板引用已从错误的 `Pisces` 修正为 `Cancer`。
- 相关内链建议也同步改为 `Cancer horoscope/basic sign page`。

## 当前状态

当前仓库新增文件：

```text
docs/world-cup-matchday-content-plan.md
docs/world-cup-matchday-production-brief.md
```

其中：

- `world-cup-matchday-content-plan.md` 是可执行计划。
- `world-cup-matchday-production-brief.md` 是今日生产简报。

## 下一步建议

### 明日优先动作

1. 把世界杯专题页落成 Astro 页面。
2. 建立 `/athletes/` 或 `/celebrities/` 的基础路由和数据结构。
3. 先写 Messi 与 Ronaldo 两篇 evergreen profile。
4. 根据当天真实赛程选择 1 场比赛写 tarot preview。
5. 比赛结束后补 post-match reflection，验证内容闭环。

### 暂不建议

短期内不建议批量生成大量比赛预测页。当前更应该先验证：

- Google 是否接受该内容语义。
- AdSense 风险是否可控。
- 单篇 preview 是否能自然转化为赛后 reflection。
- 运动员资料页是否能稳定贡献搜索入口。

## 结论

今天已经完成世界杯比赛日借势内容的策略收敛和执行框架。下一步可以进入页面实现与首批内容写作，但仍应保持克制：先做专题入口与 evergreen 资料页，再用少量 match preview 测试热点流量，不把 cusprose 推成博彩预测站。
