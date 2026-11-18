with open("gatopixel-sales-v4.html", "r", encoding="utf-8") as f:
    html = f.read()

# Let's build gatopixel-sales-v5.html with all 5 improvements:
# 1. Desconto (R$ ou %) e Frete/Taxa por Pedido (refletindo no total, recibo, WhatsApp e QR Code Pix)
# 2. Data de Vencimento e Alerta de Atraso (campo dueDate no pedido, destaque em vermelho para pedidos vencidos no painel "Falta Receber" e na lista)
# 3. Cadastro Rápido de Clientes (datalist com clientes recorrentes preenchidos automaticamente com nome + WhatsApp ao selecionar)
# 4. Controle de Estoque Simples no Catálogo (campo opcional de stock nos produtos, badge de estoque no catálogo, baixa automática quando pedido é salvo/aprovado)
# 5. Fechamento de Caixa / Relatório Mensal em PDF (modal imprimível com resumo financeiro, período selecionável e ranking dos produtos mais vendidos)

# First, let's check what files are in directory
import os
print(os.listdir("."))
