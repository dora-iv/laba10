import fsp from 'fs/promises';

// BEGIN
export async function touch(filepath) {
    try {
        await fsp.access(filepath); // Проверяем существование файла
    } catch (error) {
        if (error.code === 'ENOENT') {
            // Файл не существует, создаем его
            await fsp.writeFile(filepath, '');
        } else {
            throw error; // Пробрасываем другие ошибки
        }
    }
}

// END