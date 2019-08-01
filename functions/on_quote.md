## `on_quote(context, quote)`

> 行情数据的推送会自动触发该方法的调用。

**参数**

| 参数    | 类型        | 说明                                            |
| ------- | ----------- | ----------------------------------------------- |
| context | python 对象 | 策略的全局变量，通过点标记（"."）来获取其属性。 |
| quote   | Quote 对象  | 行情数据。                                      |

**返回**

无

**范例**

```python
def on_quote(context, quote):
    context.log_info('[on_quote] {}, {}, {}'.format( quote.instrument_id, quote.last_price, quote.volume))
```

## 