Project creating a message parser


## How to use

```
parseMessage(templateStr,dataObj);

Sample data- 

Input-

templateStr - "Hey my name is {{name}} and my mobile no. is {{mobile}}".

dataObj={
	name:'Paras',
	mobile:'95XXXXXXXX'
}

Output-

Hey my name is Paras and my mobile no. is 95XXXXXXXX.

```

Just supply the variables used in the templateString as key value pair in data object.

Data object can contain any key-value pair which might even not be used in the template.

