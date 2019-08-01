# **策略可以选择实现以下方法。**

## `init(context)`<div id='init'></div>

> 初始化方法，在启动时候会触发一次。策略使用这个方法来做各种初始化设置。

**参数**

| 参数    | 类型        | 说明                                            |
| ------- | ----------- | ----------------------------------------------- |
| context | python 对象 | 策略的全局变量，通过点标记（"."）来获取其属性。 |

**返回**

无

**范例**

```python
def init(context):
    context.add_md(Source.XTP)
    context.add_account(Source.XTP, "acc_1", 20000.0)   
```

## `pre_run(context)`<div id='pre_run'></div>

> 运行前方法。

**参数**

| 参数    | 类型        | 说明                                            |
| ------- | ----------- | ----------------------------------------------- |
| context | python 对象 | 策略的全局变量，通过点标记（"."）来获取其属性。 |

**返回**

无

**范例**

```python
def pre_run(context):
    pass
```

## `pre_quit(context)`<div id='pre_quit'></div>

> 退出前方法。

**参数**

| 参数    | 类型        | 说明                                            |
| ------- | ----------- | ----------------------------------------------- |
| context | python 对象 | 策略的全局变量，通过点标记（"."）来获取其属性。 |

**返回**

无

**范例**

```python
def pre_quit(context):
    pass
```


## `on_quote(context, quote)`<div id='on_quote'></div>

> 行情数据的推送会自动触发该方法的调用。

**参数**

| 参数  | 类型        | 说明                                          |
| ----- | ----------- | --------------------------------------------- |
| context      | python 对象 | 策略的全局变量，通过点标记（"."）来获取其属性。 |
| quote | Quote 对象  | 行情数据。                                    |

**返回**

无

**范例**

```python
def on_quote(context, quote):
    context.log_info('[on_quote] {}, {}, {}'.format( quote.instrument_id, quote.last_price, quote.volume))
```

## `on_order(context, order)`<div id='on_order'></div>
> 订单信息的更新会自动触发该方法的调用。

**参数**

| 参数 | 类型 | 说明 |
| ---- | ---- | ---- |
|context      | python 对象 | 策略的全局变量，通过点标记（"."）来获取其属性。 |
| order | Order 对象  | 订单信息更新数据。                         |

**返回**

无

**范例**
```python
def on_order(context, order):
    context.log_info('[on_order] {}, {}, {}, {}'.format( order.order_id, order.status, order.volume, order_volume_left))
```

## `on_trade(context, trade)`<div id='on_trade'></div>

> 策略订单成效信息的更新会自动触发该方法的调用。

**参数**

| 参数 | 类型 | 说明 |
| ---- | ---- | ---- |
|context      | python 对象 | 策略的全局变量，通过点标记（"."）来获取其属性。 |
| trade | Trade 对象  | 订单成交更新数据。                         |

**返回**

无

**范例**
```python
def on_trade(context, trade):
    context.log_info('[on_trade] {}, {}, {}'.format(trade.order_id, trade.volume, trade.price))
```


