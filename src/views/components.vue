<template lang="html">

    <div class="main-wrapper page-container">
        <div class="ant-row">
            <div class="aside-container ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-4">
                <v-menu mode="inline" :data="menuData" :expand="true">
                    <template slot-scope="{data}">
                        <a v-if="data.href" :href="data.href" style="display:inline" :target="data.target">{{data.name}}</a>
                        <router-link v-else :to="data.link" style="display:inline" :target="data.target">{{data.name}}</router-link>
                    </template>
                </v-menu>
            </div>
            <div class="main-container ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-20">
                <router-view keep-alive class="markdown"></router-view>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data: () => ({
        menuData: [{
            name: 'Protocol Configuration',
            children: [{
                name: 'AS2',
                link: { name: 'as2' },
            }, {
                name: 'FTP/SFTP',
                link: { name: 'ftp' },
            }, {
                name: 'OFTP',
                link: { name: 'oftp' },
            }, {
                name: 'WEBSERVICE',
                link: { name: 'webservice' },
            }],
        }, {
            name: 'Certificate',
            children: [{
                name: 'Certificate List',
                link: { name: 'cert-list' },
            }],
        }, {
            name: 'Process Configuration',
            children: [{
                name: 'Process List',
                link: { name: 'process-list' },
            },{
                name: 'Process Rule',
                link: { name: 'process-rule' },
            }],
        }],
    }),
};

</script>

<style lang="less">

    .main-wrapper {
        background: #fff;
        width: 92%;
        margin: 0 auto;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 24px;
        position: relative;
    }

    .main-container {
        padding: 24px 6% 120px 4% !important;
        margin-left: -1px;
        min-height: 500px;
        border-left: 1px solid #e9e9e9;
    }

    .page-container {
        /*color: #666;*/
        font-size: 14px;
        line-height: 1.5;

        h1 {
            color: #404040;
            font-weight: 500;
            line-height: 40px;
            margin-bottom: 24px;
            margin-top: 8px;
            font-size: 28px;
            font-family: lato, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
        }

        & > h2 {
            font-size: 24px;
        }

        hr {
            border-radius: 10px;
            height: 3px;
            border: 0;
            background: #eee;
            margin: 20px 0;
        }

        code, kbd, pre, samp {
            font-family: Consolas, monospace;
        }

        code {
            margin: 0 3px;
        }

        & > ul li {
            list-style: circle;
            margin-left: 20px;
        }

        & > ol li {
            list-style: decimal;
            margin-left: 20px;
            padding-left: 8px;
        }

        .table {
            font-size: 13px;
            border-collapse: collapse;
            border-spacing: 0px;
            empty-cells: show;
            border: 1px solid #e9e9e9;
            width: 100%;
            margin: 16px 0;

            th{
                background: #F7F7F7;
                white-space: nowrap;
                color: #5C6B77;
                font-weight: 600;
            }
            td:first-child {
                background: #fcfcfc;
                font-weight: 500;
                width: 20%;
                font-family: "Lucida Console", Consolas, Menlo, Courier, monospace;
            }
            th,td{
                border: 1px solid #e9e9e9;
                padding: 8px 16px;
                text-align: left;
            }
        }
    }

    .main-container > section > h3 {
        color: #404040;
        font-family: lato, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
        margin: 1.6em 0 .6em;
        font-weight: 500;
        clear: both;
    }

    .code-boxes-col-2-1 {
        display: inline-block;
        vertical-align: top;
        padding: 0 8px;
    }

    .aside-container {
                padding-top: 10px;
        padding-bottom: 50px;
    }

    .aside-container .ant-menu-item a, .aside-container .ant-menu-submenu-name span, .aside-container > .ant-menu-item {
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .header-anchor {
        margin-left: -18px;
    }

    .markdown {
        & > ul{
            margin-top: 1rem;
            margin-bottom: 1rem;
            & > li {
                list-style: circle;
                margin-left: 1rem;
            }
        }
        h1, h2, h3{
            a{
                font-size: .8em;
                opacity: 0;
                font-weight: normal;
                transition: opacity .2s ease-in-out;
            }

            &:hover a {
                opacity: 1;
            }
        }
        blockquote {
            font-size: 90%;
            color: #999;
            border-left: 4px solid #e9e9e9;
            padding-left: 0.8em;
            margin: 1em 0;
        }
        code{
            margin: 0 1px;
            background: #f7f7f7;
            padding: .2em .4em;
            border-radius: 3px;
            font-size: .9em;
            border: 1px solid #eee;
        }

        & > p, & > pre {
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
    }
</style>
