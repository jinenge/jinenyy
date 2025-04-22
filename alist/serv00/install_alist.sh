#!/bin/bash

#本教程由进恩哥资源仓库官方提供，仅供参考学习使用，请于24小时内从您的设备中进行删除操作。
#我们的官网：https:jinenyy.vip

# 清屏
clear

# 判断是否在 public_nodejs 目录下
if [ "$(basename "$(pwd)")" == "public_nodejs" ]; then
    # 删除 public/index.html 文件，如果不存在则跳过
    [ -f public/index.html ] && rm public/index.html

    # 删除 start.sh 文件，如果不存在则跳过
    [ -f start.sh ] && rm start.sh
    
    # 判断是否有所需文件
    files=("app.js" "start.sh" "package.json" "web.js")
    urls=(
        "https://jinenyy.vip/alist/serv00/app.js"
        "https://jinenyy.vip/alist/serv00/start.sh"
        "https://jinenyy.vip/alist/serv00/package.json"
        "https://github.com/AlistGo/alist/releases/latest/download/alist-freebsd-amd64.tar.gz"
    )

    for i in "${!files[@]}"; do
        if [ ! -f "${files[$i]}" ]; then
            wget "${urls[$i]}"
        fi
    done

    # 判断是否存在 alist 文件
    if [ -f "alist-freebsd-amd64.tar.gz" ]; then
        # 如果存在，执行以下操作
        tar -xzf alist-freebsd-amd64.tar.gz
        rm alist-freebsd-amd64.tar.gz
        rm -rf temp
        mv alist web.js
        chmod +x web.js
        ./web.js server
    fi

    # 判断是否存在 data 文件夹
    if [ -d "data" ]; then
        # 清屏
        clear

        # 如果存在，显示安装完成信息
        echo -e "已成功安装 Alist！\n"
        echo -e "请在 File manager 中，编辑 app.js 和 data/config.json\n"
        echo -e "教程配置@进恩哥资源仓库\n我们的官网https://jinenyy.vip\n"
        echo -e  "原作者@槿南\n作者官网：https://jnpan.top"
    else
        # 使您能够运行自己的软件
        devil binexec on

        # 删除 web.js 文件，如果不存在则跳过
        [ -f web.js ] && rm web.js

        # 删除 start.sh 文件，如果不存在则跳过
        [ -f start.sh ] && rm start.sh

        # 清屏
        clear

        # 如果不存在，提示信息
        echo "检测到不存在 data 文件夹，请断开重连SSH，再次输入这条指令。"
    fi

else
    # 清屏
    clear
    
    # 显示错误信息
    echo "检测到未在public_nodejs目录下，请确认网站添加的类型是否为nodejs。"
fi