from flask import Flask, jsonify, request
app = Flask(__name__)

# Rota para receber percentual de acertos
percentuais = []

@app.route('/api/salvar_percentual', methods=['POST'])
def salvar_percentual():
    data = request.json
    percentuais.append(data['percentual'])
    # mantém apenas os últimos 10
    if len(percentuais) > 10:
        percentuais.pop(0)
    return jsonify({'percentuais': percentuais})

@app.route('/api/progresso', methods=['GET'])
def progresso():
    if percentuais:
        media = sum(percentuais)/len(percentuais)
    else:
        media = 0
    return jsonify({'media': media, 'mensagem': gerar_mensagem(media)})

def gerar_mensagem(media):
    if media >= 90:
        return 'Parabéns! Seu desempenho está excelente!'
    elif media >= 70:
        return 'Muito bom! Continue evoluindo!'
    else:
        return 'Não desista! Praticando você chega lá!'

if __name__ == '__main__':
    app.run(debug=True)
