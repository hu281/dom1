import streamlit as st
import openai import openai

page_title="三亚学院智能助手",   
page_icon="🤖",
layout="centered"

st.markdown("""<style>    
    .stApp {        
        max-width: 1000px; 
         /* 限制应用最大宽度为1000像素 */      
        margin: 0 auto;  /* 设置水平居中 */    
    }        
    /* 隐藏Streamlit默认的菜单和页脚，使界面更简洁 */    
    #MainMenu {visibility: hidden;}    
    footer {visibility: hidden;}        
    /* 设置标题居中显示，并使用深灰蓝色 */    
    h1 {        
        text-align: center;        
        color: #1a2a3a;    
    } 
                   
    /* 设置副标题样式，使用灰色并添加底部间距 */    
    .subtitle {        
        text-align: center;        
        color: #6b7280;        
        margin-bottom: 2rem;    
    }
</style>""", unsafe_allow_html=True)