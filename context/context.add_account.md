## 添加交易账号<div id='add_account'></div>

策略需要先添加账户，才能使用该账户报单

`context.add_account(source_id, account_id, cash_limit)`

**参数**

| 参数       | 类型  | 说明       |
| ---------- | ----- | ---------- |
| source_id  | str   | 行情柜台ID |
| account_id | str   | 账户ID     |
| cash_limit | float | 策略首次运行时才设置初始资金  |

**返回**

| 返回   | 类型 | 说明 |
| ------ | ---- | ---- |
| result | bool |      |

##
