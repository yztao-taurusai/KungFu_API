## `报单`<div id='insert_order'></div>

`context.insert_limit_order(instrument_id, exchange_id, account_id,limit_price, volume, side, offset)`

**参数**

| 参数          | 类型  | 说明     |
| ------------- | :---: | -------- |
| instrument_id |  str  | 合约ID   |
| exchange_id   |  str  | 交易所ID |
| account_id    |  str  | 交易账号 |
| limit_price   | float | 价格     |
| volume        |  int  | 数量     |
| price_type    |  str  | 报单类型 |
| side          |  str  | 买卖方向 |
| offset        |  str  | 开平方向 |

**返回**

|   返回   | 类型 |  说明  |
| :------: | ---- | :----: |
| order_id | long | 订单ID |

**范例**

- 通过交易账户acc_1以12.0的价格买200股浦发银行：

`context.insert_limit_order("600000", Exchange.SSE, "acc_1", 12.0, 200, PriceType.Limit, Side.Buy, Offset.Open)`

- 通过交易账户acc_2以3500的价格开仓买入2手上期所rb1906合约：

`context.insert_limit_order("rb1906", Exchange.SHFE, "acc_2", 3500.0, 2, PriceType.Limit, Side.Buy, Offset.Open)`