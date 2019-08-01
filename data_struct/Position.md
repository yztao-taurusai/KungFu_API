# Position

|         属性         |          类型           |     注释     |
| :------------------: | :---------------------: | :----------: |
|       rcv_time       |          long           | 数据接收时间 |
|     update_time      |          long           | 数据更新时间 |
|     trading_day      |           str           |    交易日    |
|    instrument_id     |           str           |    合约ID    |
|   instrument_type    |     InstrumentType      |   合约类型   |
|     exchange_id      |           str           |    交易所    |
|      account_id      |           str           |    账号     |
|      client_id       |           str           |    策略    |
|      direction       |        Direction        |    方向    |
|        volume        |          long           |    总仓    |
|  yesterday_volume    |          long           |    昨仓    |
|   frozen_total       |          long           |    总冻结    |
|  frozen_yesterday    |          long           |    昨冻结    |
|      last_price      |          float          |    最新价    |
|      open_price      |          float          |    今开盘    |
|      cost_price      |          float          |    成本价    |
|     close_price      |          float          |    收盘价(股票和债券)    |
|   pre_close_price    |          float          |    昨收价(股票和债券)    |
|   settlement_price   |          float          |    结算价(期货)    |
| pre_settlement_price |          float          |    昨结价(期货)    |
| margin | float | 保证金(期货) |
| position_pnl | float | 持仓盈亏(期货) |
| close_pnl | float | 平仓盈亏(期货) |
| realized_pnl | float | 已实现盈亏 |
| unrealized_pnl | float | 未实现盈亏 |
| open_date | str | 开仓日(债券) |
| expire_date | str | 到期日(债券) |

