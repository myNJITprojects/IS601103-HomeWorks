
def getFileData(file):
    with open(file, 'r') as filetoread:
        data = filetoread.read()
    return data


def saveToFile(file, data):
    with open(file, 'w') as fileToSave:
        fileToSave.write(data)


def replace_text(data, searchString, replaceString):
    # Perform case-sensitive replacement
    updatedData = data.replace(searchString, replaceString)
    return updatedData


def mainScript():
    filePath = input("Whats the file path: ")
    data = getFileData(filePath)

    searchString = input("What string are we looking for: ")
    replaceString = input("What string are we replacing with: ")

    newData = replace_text(data, searchString, replaceString)

    saveToFile(filePath, newData)

    print(f'Original Data:\n{data}')
    print()
    print(f'Modified Data:\n{newData}')


if __name__ == "__main__":
    mainScript()
