// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

const bytes = new Uint8Array([
  0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, 0x01, 0x05, 0x01,
  0x60, 0x00, 0x01, 0x7f, 0x03, 0x02, 0x01, 0x00, 0x05, 0x03, 0x01,
  0x00, 0x01, 0x07, 0x11, 0x02, 0x04, 0x67, 0x72, 0x6f, 0x77, 0x00,
  0x00, 0x06, 0x6d, 0x65, 0x6d, 0x6f, 0x72, 0x79, 0x02, 0x00, 0x0a,
  0x08, 0x01, 0x06, 0x00, 0x41, 0x01, 0x40, 0x00, 0x0b
]);

assertPromiseResult(
    WebAssembly.compile(bytes),
    module => {
      print('promise resolved: ' + module);
      new WebAssembly.Instance(module).exports.grow();
    });
