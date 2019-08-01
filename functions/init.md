## `init(context)`

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

## 