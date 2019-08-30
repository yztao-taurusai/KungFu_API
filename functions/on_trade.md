## `on_trade(context, trade)`

> 策略订单成交信息的更新会自动触发该方法的调用。

**参数**

| 参数    | 类型        | 说明                                            |
| ------- | ----------- | ----------------------------------------------- |
| context | python 对象 | 策略的全局变量，通过点标记（"."）来获取其属性。 |
| trade   | [Trade 对象](/data_struct/Trade.md/#Trade)  | 订单成交更新数据。                              |

**返回**

无

**范例**

```python
def on_trade(context, trade):
    context.log_info('[on_trade] {}, {}, {}'.format(trade.order_id, trade.volume, trade.price))
```

