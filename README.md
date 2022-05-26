# TypeScript-video-converter
Финальное задание курса TS(сервис с архитектурой и patterns). Реализация под конвертер видео.

## :warning: Требования для запуска сервиса под конвертацию видео:
  - Установите Node.js
  - Установите TypeScript для компиляции в JS.
  - Установите Ffmpeg (используется для конвертации видео) https://ffmpeg.org/download.html
  - Склонируйте репозиторий.
  - Установите зависимости проекта через npm.
  - Скомпилируйте TS проект в JS командой tsc в консоли.
  - Запустите скомплированный app.js в папке dist с помощью Node.js, командой node dist/app.js
  - Следуйте командам в консоли для конвертации и наслаждайтесь =).

## :mag_right: Основные особенности сервиса:
  - Сервис является легко расширяемым и с возможностью использования под разные задачи.
  - Сервис является переработоной реализацией наивной реализации с использованием patterns проектирования и архетиктурой.
  - За счет patterns проектирования и архетиктуры, можно переиспользовать под разные задачи и реализовывая новые команды, по аналогии с commands/ffmpeg.
  - Полностью написан на TS с типизацией и типами.
  - Компилятор TS сконфигурирован под сборку в отдельную директорию dist.
  - В сервисе использованы patterns: Singleton, Builder, Command, Template method.


## :question: Что может сервис:
  - В текщуей версии сервис исполняет создание нового видео в mp4 с измененым разрешением.
  - Логирует процесс изменения в терминал.
  - Сообщает о завершении процесса.
  - Сообщает о ошибках конвертации.
  - Если такой файл существует в директории, он будет удален и заменен на новый.
  - Для конвертации используется  Ffmpeg.