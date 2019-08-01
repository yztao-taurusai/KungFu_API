## `on_order(context, order)`

> 订单信息的更新会自动触发该方法的调用。

**参数**

| 参数    | 类型        | 说明                                            |
| ------- | ----------- | ----------------------------------------------- |
| context | python 对象 | 策略的全局变量，通过点标记（"."）来获取其属性。 |
| order   | Order 对象  | 订单信息更新数据。                              |

**返回**

无

**范例**

```python
def on_order(context, order):
    context.log_info('[on_order] {}, {}, {}, {}'.format( order.order_id, order.status, order.volume, order_volume_left))
```

## 