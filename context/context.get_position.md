## 获取持仓信息<div id='get_position'></div>

`context.get_position(instrument_id, exchange_id, direction=Direction.Long, account_id='')`

**参数**

| 参数          | 类型  | 说明     |
| ------------- | :---: | -------- |
| instrument_id |  str  | 合约ID   |
| exchange_id   |  str  | 交易所ID |
| direction   | Direction | 方向 |
| account_id    |  str  | 交易账号(为空则返回策略总持仓) |

**返回**

| 返回 | 类型  | 说明     |
| ---- | ----- | -------- |
| pos  | Position | 持仓信息 |

## 