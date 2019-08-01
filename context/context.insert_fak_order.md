## `FAK 单`<div id='insert_fak_order'></div>

`context.insert_fak_order(instrument_id, exchange_id, account_id, limit_price, volume, side, offset)`

**参数**

| 参数          | 类型  | 说明     |
| ------------- | ----- | -------- |
| instrument_id | str   | 合约ID   |
| exchange_id   | str   | 交易所ID |
| account_id    | str   | 账号ID   |
| limit_price   | float | 价格     |
| volume        | int   | 数量     |
| side          | str   | 买卖方向 |
| offset        | str   | 开平方向 |

**返回**

| 返回     | 类型 | 说明   |
| -------- | ---- | ------ |
| order_id | long | 订单ID |

**范例**

通过交易账户acc_2以3500的价格开仓买入2手上期所rb1906合约，立刻全部成交剩余转撤销：

`context.insert_fak_order("rb1906", Exchange.SHFE, "acc_2", 3500.0, 2, Side.Buy, Offset.Open)`

**说明**

> 立刻成交剩余转撤销，交易所能够使全部或者部分订单在指定价位上立刻成交。国内交易所不支持设置最小成交手数。
>
> SHFE/DCE/CFFEX/DCE 均支持。



## 