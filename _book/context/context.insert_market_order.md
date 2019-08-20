## `市价单`<div id='insert_market_order'></div>

`context.insert_market_order(instrument_id, exchange_id, account_id, volume, side, offset)`

**参数**

| 参数          | 类型 | 说明     |
| ------------- | ---- | -------- |
| instrument_id | str  | 合约ID   |
| exchange_id   | str  | 交易所   |
| account_id    | str  | 账号ID   |
| volume        | int  | 数量     |
| side          | str  | 买卖方向 |
| offset        | str  | 开平方向 |

**返回**

| 返回     | 类型 | 说明   |
| -------- | ---- | ------ |
| order_id | long | 订单ID |

**范例**

通过交易账户acc_1以市价买200股浦发银行：

`context.insert_market_order("600000", Exchange.SSE, "acc_1", 200, Side.Buy, Offset.Open)`

**说明**

> 上期所不支持市价单。
>
> 不同交易所市价单撮合规则不同，上交所和深交所可以指定不同价格类型的市价单，目前功夫采用最优五档即时成交转撤销。

## 