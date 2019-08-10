# The Computing Layer of ZheJiangLab Project

## Description

#### Complete Three Algorithms

- Community Detection
- Shortest Path
- Page Rank

## Install

`npm i`

## Start Project

`nodemon app.js`

## Usage

### api

|                 |  请求方式  |      参数      | 输出                                                         |
| :-------------: | :--------: | :------------: | ------------------------------------------------------------ |
| CommunityDetect |    GET     |       -        | {0:1,1:1}  //string , 反映每个节点属于哪个社团               |
|    PageRank     |            |       -        | [('0',0.02),('1',0.01)]//string, 根据权值大小排序，反映每个节点的权值 |
| PageRankByNode  | GET / POST |      node      | 0.002  // 只输出node的PageRank值                             |
|  ShortestPath   | GET / POST | source, target | [[‘1’,’3’,’2’],[‘1’,’4’,’5’,’2’]]  //source到target所有最短路径 |

## Example

```javascript
$.ajax({
    url: 'ShortestPath',
    type: "GET", // type: "POST"
    data: {
        source: $('#source').val(),
        target: $('#target').val()
    },
    // dataType: String,
    success: (result) => {
        $('#result').text(result)
    }
})
```

